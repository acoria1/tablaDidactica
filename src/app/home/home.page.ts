import { Component, Directive, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonFab, IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material/angular-material.module';
import {numeros} from '../constants/numeros';
import { colores } from '../constants/colors';
import { Tile } from '../interfaces/tile';
import { animales } from '../constants/animales';
import { lenguajes } from '../constants/lenguajes';
import { sets } from '../constants/sets';
import { AudioService } from '../services/audio.service';
import { Router } from '@angular/router';
import {ScreenOrientation} from '@awesome-cordova-plugins/screen-orientation';
import { BehaviorSubject, Observable, Subscription, map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SpinnerComponent, CommonModule, AngularMaterialModule],
})
export class HomePage implements OnInit, OnDestroy {
  orientationType : string;
  ref$? : Subscription;
  signingOut : boolean = false;
  tiles : Tile[][] = [[],[],[]];
  selectedLanguageIndex : number = 0;
  selectedTilesSet : number = 2;
  lenguajes : {
    id : string,
    banderaImagen : string,
    imagenSeleccionada : string
  }[];
  sets : {
    id : string,
    imagen : string,
    imagenSeleccionada : string
  }[];
  public fabsActivated : boolean[] = [false,false];
  @ViewChild('fab1') fab1? : IonFab;
  @ViewChild('fab2') fab2? : IonFab;

  constructor(public _auth: AuthService, private _audioService : AudioService, private _router : Router) {
    this.lenguajes = lenguajes;
    this.sets = sets;
    this.orientationType = ScreenOrientation.type;
    this.ref$ = ScreenOrientation.onChange().subscribe(()=>{
      console.log(ScreenOrientation.type);
      this.orientationType = ScreenOrientation.type;
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.ref$?.unsubscribe();
  }

  async loadData(){
    this.loadNumeros();
    this.loadColores();
    this.loadAnimales();
  }

  loadNumeros(){
    for (let i = 0; i < numeros.length; i++) {
      this.tiles[0].push(numeros[i]);
    };
  }

  loadColores(){
    for (let i = 0; i < colores.length; i++) {
      this.tiles[1].push(colores[i]);
    };
  }

  loadAnimales(){
    for (let i = 0; i < animales.length; i++) {
      this.tiles[2].push(animales[i]);
    };
  }

  async handleSingOut(){
    this.signingOut = true;
    await setTimeout(() => {
      this._auth.SignOut().then(() => {
        this._router.navigate(['login']);
      });
    }, 2000);
  }
  
  tileClicked(index : number){
    if(!this.fabsActivated.includes(true)){
      const audioName = `${this.sets[this.selectedTilesSet].id}_${this.tiles[this.selectedTilesSet][index].value}_${this.lenguajes[this.selectedLanguageIndex].id}`;
      const audioPath = this.tiles[this.selectedTilesSet][index].audios![this.selectedLanguageIndex].audioPath;
      this._audioService.loadPlayAndUnload(audioName,audioPath);
    }
  }

  fabClicked(index : number){
    this.fabsActivated[index] = !(this.fabsActivated[index]);
    if (this.fabsActivated[index]){
      if(index === 0){
        this.fab2?.close();
        this.fabsActivated[1] = false;
      } else {
        this.fab1?.close();
        this.fabsActivated[0] = false;
      }
    }
  }
}
  


