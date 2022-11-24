import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightColorSliderComponent } from './light-color-slider/light-color-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnoArticleComponent } from './techno-article/techno-article.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    LightColorSliderComponent,
    NavbarComponent,
    ProductsComponent,
    NotFoundComponent,
    ContactComponent,
    TechnologyComponent,
    TechnoArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot([
      {path:'', component:LightColorSliderComponent},      
      {path:'products',component:ProductsComponent},
      {path:'technology',component:TechnologyComponent},
      {path:'technology/:id',component:TechnoArticleComponent},
      {path:'contact',component:ContactComponent},
      {path:'**',component:NotFoundComponent}
      
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
