import { Routes } from '@angular/router';
import { Blog } from './pages/blog/blog';
import { About } from './pages/about/about';
import { Archive } from './pages/archive/archive';
import { Category } from './pages/category/category';
import { Post } from './pages/post/post';
import { TravelPlan } from './pages/travel-plan/travel-plan';
import { Essay } from './pages/essay/essay';

export const routes: Routes = [
  { path: '', component: Blog },
  { path: 'archive', component: Archive },
  { path: 'category', component: Category },
  { path: 'about', component: About },
  { path: 'post/:id', component: Post },
  { path: 'travel-plan', component: TravelPlan },
  { path: 'essay', component: Essay },
  { path: '**', redirectTo: '' },
];
