import { Component } from '@angular/core';
import {HeaderComponent} from "../core/header/header.component";
import {SidePanelComponent} from "../core/side-panel/side-panel.component";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    SidePanelComponent,
    PostsComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
