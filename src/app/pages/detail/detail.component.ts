import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  @Input() id = 0;

  character!: Character;

  apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.getCharacterById(this.id).then(res => {
      this.character = res;
    })
  }

}
