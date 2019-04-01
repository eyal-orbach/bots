import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectDensityComponent } from './subject-density/subject-density.component';
import { BehaviourSimilarityComponent } from './behaviour-similarity/behaviour-similarity.component';
import { TweetSimilarityComponent } from './tweet-similarity/tweet-similarity.component';
import { CustomMaterialModule } from './core/material.module';
import { DensitySettingsComponent } from './subject-density/density-settings/density-settings.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubjectDensityComponent,
    BehaviourSimilarityComponent,
    TweetSimilarityComponent,
    DensitySettingsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
