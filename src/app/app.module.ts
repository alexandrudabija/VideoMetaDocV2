
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import { CountUpModule } from 'ngx-countup';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commonComponents/navbar/navbar.component';
import { IndexComponent } from './pages/index_/index/index.component';
import { CartComponent } from './pages/shop_/shopComponents/cart/cart.component';
import { CheckoutComponent } from './pages/shop_/shopComponents/checkout/checkout.component';
import { ProductsComponent } from './pages/shop_/shopComponents/products/products.component';
import { StatisticsComponent } from './pages/index_/indexComponents/statistics/statistics.component';
import { PictureSectionComponent } from './pages/index_/indexComponents/picture-section/picture-section.component';
import { OurServices } from './pages/index_/indexComponents/ourServices/ourServices.component';
import { AuthorizationDocumentComponent } from './pages/shop_/shopComponents/authorization-document/authorization-document.component';
import { GoogleMapsComponent } from './pages/index_/indexComponents/googleMaps/googleMaps.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { AuthorizedTechnician } from './pages/index_/indexComponents/authorizedTechnician/authorizedTechnician.component';
import { UserCallOptionsComponent } from './commonComponents/userCallOptions/userCallOptions.component';
import { HeaderComponent } from './pages/index_/indexComponents/header/header.component';
import { RequestCallComponent } from './commonComponents/requestCall/requestCall.component';
import { ShopComponent } from './pages/shop_/shop/shop.component';
import { TestComponent } from './pages/index_/indexComponents/test/test.component';
import { WorksPhotosComponent } from './pages/index_/indexComponents/worksPhotos/worksPhotos.component';
import { AboutUsComponent } from './pages/index_/indexComponents/aboutUs/aboutUs.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './pages/shop_/shopComponents/products-header/products-header.component';
import { MatSelectModule } from '@angular/material/select';
import { FiltersComponent } from './pages/shop_/shopComponents/filters/filters.component';
import { AboutTheCartComponent } from './pages/shop_/shopComponents/about-the-cart/about-the-cart.component';
import { CartService } from './services/cart.service';
import { ProductBoxComponent } from './pages/shop_/shopComponents/product-box/product-box.component';
import { FilterCategoryComponent } from './pages/shop_/shopComponents/filter-category/filter-category.component';
import { AutoSlidesComponent } from './pages/index_/indexComponents/auto-slides/auto-slides.component';

// import { UserComponent } from './pages/user_/user.component';
// import { PhoneComponent } from './commonComponents/phone/phone.component';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    CartComponent,
    CheckoutComponent,
    TestComponent,
    WorksPhotosComponent,
    AboutUsComponent,
    ProductsComponent,
    StatisticsComponent,
    PictureSectionComponent,
    OurServices,
    AuthorizationDocumentComponent,
    GoogleMapsComponent,
    FooterComponent,
    AuthorizedTechnician,
    UserCallOptionsComponent,
    HeaderComponent,
    RequestCallComponent,
    ShopComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    AboutTheCartComponent,
    ProductBoxComponent,
    FilterCategoryComponent,
    AutoSlidesComponent,


    // PhoneComponent,
 // UserComponent,
  ],
  imports: [
    CountUpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressBarModule,
    FormsModule,
    SwiperModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatSliderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})


export class AppModule { }
