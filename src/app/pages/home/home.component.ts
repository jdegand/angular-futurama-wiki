import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];

  apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.getCharacters().then(res => {
      this.characters = res;
    });
  }

}
