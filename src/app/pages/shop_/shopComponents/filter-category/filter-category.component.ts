import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.less']
})
export class FilterCategoryComponent implements OnInit {


  categories$ = new Observable<{ cat: Array<{ title: string, image: string; }> }>
   constructor(private router: Router, private CategoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.categories$ = this.CategoriesService.categories;
    setTimeout(() => {
    const section = document.getElementById('start');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    });
  }



  onCategory(category:string): void {


      const myParameter = category;

      this.router.navigate(['/shop',myParameter])



  }

}
