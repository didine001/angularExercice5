import { Component } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss'],
})
export class VoitureComponent {
  voitures: Voiture[] = [
    { id: 0, marque: 'Porsche', modele: '992 gt3rs' },
    { id: 1, marque: 'Peugeot', modele: '308' },
    { id: 2, marque: 'Renault', modele: 'clio' },
  ];

  voitureSelectionnee: Voiture | null = null;
  ngOnInit(): void {
    this.afficherDetails(this.voitures[0]);
  }

  afficherDetails(voiture: Voiture): void {
    this.voitureSelectionnee = voiture;
  }
}
interface Voiture {
  id: number;
  marque: string;
  modele: string;
}
