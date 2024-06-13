import { Component } from '@angular/core';
import {CategoriesService} from "../../../services/categories/categories.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {
  constructor(private categoriesService:CategoriesService ) {
  }

  categoriesList = this.categoriesService.categoriesList;


}
