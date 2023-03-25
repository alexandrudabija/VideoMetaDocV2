import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

@Output() scroll = new EventEmitter<string>();
public selectedLanguage!:string;
readonly leanguageArray:Array<{leanguage:string}>=[
  {leanguage:'ro'},
  {leanguage:'ru'},
  {leanguage:'it'},
  {leanguage:'en'},
  {leanguage:'fr'},
  {leanguage:'ar'},
  {leanguage:'ja'},
  {leanguage:'es'},
  {leanguage:'de'},
  {leanguage:'tr'},
  {leanguage:'uk'},
  {leanguage:'zh'},

]

  constructor(private translate: TranslateService, private Router: Router) {}

ngOnInit(): void {

    const browserLang:string = this.translate.getBrowserLang()||'en';

    this.translate.setDefaultLang(browserLang);
    this.selectedLanguage = browserLang;

}

switchLanguage():void {

  this.translate.use(this.selectedLanguage);
}


scrollTo(name:string):void
{

  if (name === "products") {
    this.Router.navigate(['/category'])

  }
  else
  {


    const myParameter = name;
    this.Router.navigate(['/index', myParameter]);




    this.scroll.emit(name);





  }

}





}
