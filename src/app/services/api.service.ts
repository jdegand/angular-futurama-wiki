import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = 'https://api.sampleapis.com/futurama/characters/';

  constructor() {}

  async getCharacters() {
    const data = await fetch(this.base_url);
    return data.json() ?? [];
  }

  async getCharacterById(id: number) {
    const data = await fetch(this.base_url + id);
    return data.json() ?? [];
  }
}
