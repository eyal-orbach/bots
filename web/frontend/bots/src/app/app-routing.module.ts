import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectDensityComponent } from './subject-density/subject-density.component';
import { BehaviourSimilarityComponent } from './behaviour-similarity/behaviour-similarity.component';
import { TweetSimilarityComponent } from './tweet-similarity/tweet-similarity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'density', component: SubjectDensityComponent, data: { title: 'Subject Density' } },
  { path: 'behaviour', component: BehaviourSimilarityComponent, data: { title: 'Behaviour Similarity' } },
  { path: 'tweet', component: TweetSimilarityComponent, data: { title: 'Tweet Similarity' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
