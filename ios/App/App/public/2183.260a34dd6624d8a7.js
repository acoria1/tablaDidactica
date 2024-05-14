"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2183],{2183:(Z,m,s)=>{s.r(m),s.d(m,{LogniPage:()=>T});var b=s(5861),u=s(6895),a=s(4006),r=s(2879),c=s(6159),p=s(3016),_=s(4132),t=s(4650),h=s(782);function v(n,l){if(1&n){const o=t.EpF();t.TgZ(0,"mat-grid-tile",2),t.NdJ("click",function(){const g=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.buttonSelected(g))}),t.TgZ(1,"div",3),t._uU(2),t.qZA()()}if(2&n){const o=l.$implicit,e=t.oxw();t.Udp("background","url("+o.backgroundImg+") center")("background-color",""!==o.backgroundColor?o.backgroundColor:"rgba(255,255,255,0.6)")("background-size","cover"),t.xp6(1),t.Tol(e.labelClass),t.Udp("color",o.color),t.xp6(1),t.hij(" ",o.label," ")}}let C=(()=>{class n{constructor(){this.buttons=[],this.classWrapper="",this.columns=2,this.labelClass="mat-headline",this.gutterSize="5%",this.rowHeight="1:1",this.buttonClicked=new t.vpe}ngOnInit(){}ngOnChanges(){}buttonSelected(o){this.buttonClicked.emit(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-custom-buttons"]],inputs:{buttons:"buttons",classWrapper:"classWrapper",columns:"columns",labelClass:"labelClass",gutterSize:"gutterSize",rowHeight:"rowHeight"},outputs:{buttonClicked:"buttonClicked"},standalone:!0,features:[t.TTD,t.jDz],decls:3,vars:6,consts:[[1,"grid-layout-custom",3,"cols","rowHeight","gutterSize"],["class","selectable mat-grid-tile-rounded","style","background-blend-mode: lighten; border-radius: 50%;",3,"background","background-color","background-size","click",4,"ngFor","ngForOf"],[1,"selectable","mat-grid-tile-rounded",2,"background-blend-mode","lighten","border-radius","50%",3,"click"],[1,"text-center"]],template:function(o,e){1&o&&(t.TgZ(0,"div")(1,"mat-grid-list",0),t.YNc(2,v,3,11,"mat-grid-tile",1),t.qZA()()),2&o&&(t.Tol(e.classWrapper),t.xp6(1),t.Q6J("cols",e.columns)("rowHeight",e.rowHeight)("gutterSize",e.gutterSize),t.xp6(1),t.Q6J("ngForOf",e.buttons))},dependencies:[r.Pc,u.ez,u.sg,p.h,h.Il,h.DX],styles:[".mat-grid-tile[_ngcontent-%COMP%]{border:3px solid rgb(48,48,48)}"]}),n})();const f=[{uid:"100001",email:"vhqtftpagtpwsllkxx@bbitq.com",password:"Password_123",label:"",imagen:"/assets/images/dummy-users/avatar_1.png"},{uid:"100002",email:"hnitisnpwqlyilpcxl@tcwlx.com",password:"Password_123",label:"",imagen:"/assets/images/dummy-users/avatar_3.png"},{uid:"100003",email:"afurtzywqmhuihnsyj@tpwlb.com",password:"Password_123",label:"",imagen:"/assets/images/dummy-users/avatar_2.png"}];var x=s(3651);function w(n,l){if(1&n){const o=t.EpF();t.TgZ(0,"app-custom-buttons",24),t.NdJ("buttonClicked",function(i){t.CHM(o);const g=t.oxw(2);return t.KtG(g.loadLoginForm(i))}),t.qZA()}if(2&n){const o=t.oxw(2);t.Q6J("buttons",o.mockUsersButtons)("classWrapper","feature-container-login")("columns",3)}}function P(n,l){1&n&&(t.TgZ(0,"ion-note",25),t._uU(1,"formato inv\xe1lido de email"),t.qZA())}function y(n,l){if(1&n){const o=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5),t._uU(3," Bienvenido \u{1f44b} "),t.qZA(),t.TgZ(4,"div",6),t._uU(5,"Ingresa para continuar"),t.qZA()(),t.TgZ(6,"div",7)(7,"div",8),t.YNc(8,w,1,3,"app-custom-buttons",9),t.qZA(),t.TgZ(9,"form",10),t.NdJ("ngSubmit",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.handleLogIn())}),t.TgZ(10,"ion-item",11)(11,"ion-label",12),t._uU(12,"Correo electr\xf3nico"),t.qZA(),t._UZ(13,"ion-input",13),t.YNc(14,P,2,0,"ion-note",14),t.qZA(),t.TgZ(15,"ion-item",15)(16,"ion-label",12),t._uU(17,"Contrase\xf1a"),t.qZA(),t._UZ(18,"ion-input",16),t.TgZ(19,"ion-button",17),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.togglePasswordVisibility())}),t._UZ(20,"ion-icon",18),t.qZA()(),t.TgZ(21,"div",19),t._uU(22," \xbfNo tienes cuenta? \xa0 "),t.TgZ(23,"a",20)(24,"u",21),t._uU(25,"Registrate"),t.qZA()()(),t.TgZ(26,"div",22)(27,"ion-button",23)(28,"h1"),t._uU(29,"Ingresar"),t.qZA()()()()()()}if(2&n){const o=t.oxw();t.xp6(8),t.Q6J("ngIf",o.mockUsersButtons.length>0),t.xp6(1),t.Q6J("formGroup",o.loginForm),t.xp6(5),t.Q6J("ngIf",o.loginForm.get("email").touched),t.xp6(4),t.Q6J("type",o.hidePassword?"password":"text"),t.xp6(2),t.Q6J("name",o.hidePassword?"eye-off-outline":"eye-outline"),t.xp6(7),t.Q6J("disabled",!o.loginForm.valid||o.invalidCredentials)}}function k(n,l){1&n&&t._UZ(0,"app-spinner",26),2&n&&t.Q6J("optionalMessage","Ingresando")}let T=(()=>{class n{constructor(o,e,i,g){this.auth=o,this._router=e,this.fb=i,this.toastController=g,this.attemptingSingIn=!1,this.hidePassword=!0,this.invalidCredentials=!1,this.mockUsersButtons=[]}ngOnInit(){f.forEach(o=>{this.mockUsersButtons.push({id:o.uid,color:"grey",label:o.label,backgroundImg:o.imagen})}),this.loginForm=this.fb.group({email:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required]]}),this.loginForm.valueChanges.subscribe(()=>{this.invalidCredentials=!1})}ngOnDestroy(){console.log("Cleared")}loadLoginForm(o){var e,i;let g=f.find(d=>d.uid==o.id);null===(e=this.loginForm.get("email"))||void 0===e||e.setValue(g.email),null===(i=this.loginForm.get("password"))||void 0===i||i.setValue(g.password)}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}handleLogIn(){this.attemptingSingIn=!0,this.auth.SignIn(this.loginForm.get("email").value,this.loginForm.get("password").value).then(()=>{this.auth.afAuth.authState.subscribe(o=>{o&&setTimeout(()=>{var e,i;this.attemptingSingIn=!1,null===(e=this.loginForm.get("email"))||void 0===e||e.setValue(""),null===(i=this.loginForm.get("password"))||void 0===i||i.setValue(""),this._router.navigate(["/home"])},1500)})}).catch(o=>{this.attemptingSingIn=!1,this.invalidCredentials=!0,this.presentToast("bottom","No pudimos verificar tus credenciales, por favor vuelve a ingresarlas.")})}presentToast(o,e){var i=this;return(0,b.Z)(function*(){yield(yield i.toastController.create({message:e,duration:2500,position:o,icon:"alert-circle-outline",buttons:[{text:"Minimizar",role:"cancel"}],color:"warning"})).present()})()}handleGoogleAuth(){this.auth.GoogleAuth()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(x.e),t.Y36(c.F0),t.Y36(a.qu),t.Y36(r.yF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-logni"]],hostBindings:function(o,e){1&o&&t.NdJ("unloaded",function(){return e.ngOnDestroy()})},standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[3,"fullscreen"],["class","d-flex flex-column p-4","style","min-height: 100%;",4,"ngIf","ngIfElse"],["spinner",""],[1,"d-flex","flex-column","p-4",2,"min-height","100%"],[1,"row",2,"margin-bottom","5vh","margin-right","5vw"],[1,"h1","heading","mt-4","ion-text-end"],[1,"para","mr-5","ion-text-end"],[1,"row","align-self-center"],[1,"p-4","mb-4"],[3,"buttons","classWrapper","columns","buttonClicked",4,"ngIf"],[3,"formGroup","ngSubmit"],["lines","full",1,"mb-4"],["position","floating","color","warning"],["type","email","placeholder","nombre.apellido@dominio.com","formControlName","email","legacy","true"],["slot","error",4,"ngIf"],["lines","full",1,"mb-5"],["placeholder","**********","formControlName","password","legacy","true",3,"type"],["size","default","slot","end","fill","clear",1,"pt-3","icon-button",3,"click"],["color","light",1,"iconEye",3,"name"],[1,"signup-text","mb-3"],["routerLink","/register","routerLinkActive","active",1,"mat-subheading-2"],[1,"font-weight-bold"],[1,"mt-5"],["strong","true","type","submit","expand","block","color","medium",1,"login-button","mt-4","mb-3",3,"disabled"],[3,"buttons","classWrapper","columns","buttonClicked"],["slot","error"],[3,"optionalMessage"]],template:function(o,e){if(1&o&&(t.TgZ(0,"ion-content",0),t.YNc(1,y,30,6,"div",1),t.YNc(2,k,1,1,"ng-template",null,2,t.W1O),t.qZA()),2&o){const i=t.MAs(3);t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",!e.attemptingSingIn)("ngIfElse",i)}},dependencies:[r.Pc,r.YG,r.W2,r.gu,r.pK,r.Ie,r.Q$,r.uN,r.j9,r.Fo,u.ez,u.O5,a.u5,a._Y,a.JJ,a.JL,c.Bz,c.rH,c.Od,a.UX,a.sg,a.u,p.h,_.O,C],styles:[".heading[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.para[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:#ecf3fc}.login-button[_ngcontent-%COMP%]{height:150px;--border-radius: 12px;--box-shadow: none;--border-width: 2px;--border-style: solid;--border-color: black}.google-button[_ngcontent-%COMP%]{height:50px;--border-radius: 12px;--box-shadow: none}.signup-text[_ngcontent-%COMP%]{text-align:center}.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--ion-color-warning)}ion-footer[_ngcontent-%COMP%]{display:block;order:1;width:100%;z-index:10}.copyright[_ngcontent-%COMP%]{text-align:center}.iconEye[_ngcontent-%COMP%]{font-size:26px}.icon-button[_ngcontent-%COMP%]{--ripple-color: #ffffff}.full-width[_ngcontent-%COMP%]{width:100%}ion-item[_ngcontent-%COMP%]{background:transparent;--highlight-height: 2px;--highlight-color-focused: #51f3ff;--highlight-color-valid: #ffffff;--highlight-color-invalid: #efe866;--border-color: #ffffff;--border-size: 2px}"]}),n})()}}]);