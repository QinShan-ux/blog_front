import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ARTICLES, Article } from '../../data/articles';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.html',
  styleUrl: './post.css',
  encapsulation: ViewEncapsulation.None,
})
export class Post {
  private route = inject(ActivatedRoute);
  private id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id'))));

  article = computed(() => {
    const id = this.id();
    return ARTICLES.find((a) => a.id === id) ?? null;
  });

  prevArticle = computed(() => {
    const current = this.article();
    if (!current) return null;
    const idx = ARTICLES.indexOf(current);
    return idx > 0 ? ARTICLES[idx - 1] : null;
  });

  nextArticle = computed(() => {
    const current = this.article();
    if (!current) return null;
    const idx = ARTICLES.indexOf(current);
    return idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null;
  });
}
