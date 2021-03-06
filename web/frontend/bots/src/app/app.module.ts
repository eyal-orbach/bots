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
import { ResultsContainerComponent, MatPaginatorIntlUsers } from './results-container/results-container.component';
import { TweetSimilaritySettingsComponent } from './tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component';
import { BehaviourSettingsComponent } from './behaviour-similarity/behaviour-settings/behaviour-settings.component';
import { MatPaginatorIntl } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubjectDensityComponent,
    BehaviourSimilarityComponent,
    TweetSimilarityComponent,
    DensitySettingsComponent,
    HomeComponent,
    ResultsContainerComponent,
    TweetSimilaritySettingsComponent,
    BehaviourSettingsComponent,
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
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlUsers }],
  bootstrap: [AppComponent]
})
export class AppModule { }
