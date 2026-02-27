import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  selectedTag = signal<string | null>(null);

  allTags = computed(() => {
    const tagSet = new Set<string>();
    ARTICLES.forEach(a => a.tags.forEach(t => tagSet.add(t)));
    return [...tagSet];
  });

  filteredArticles = computed(() => {
    const tag = this.selectedTag();
    if (!tag) return ARTICLES;
    return ARTICLES.filter(a => a.tags.includes(tag));
  });

  selectTag(tag: string) {
    this.selectedTag.set(this.selectedTag() === tag ? null : tag);
  }
}
