import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {PostsService} from "../../services/posts/posts.service";


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private postsService:PostsService) {
  }

  postsList = this.postsService;

}
