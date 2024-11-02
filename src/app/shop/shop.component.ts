import { Component, inject } from '@angular/core';
import { PiesService } from '../pies.service';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,HeroComponent,RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  private piesService = inject(PiesService);
  public piesOfTheWeek = this.piesService.getSpecials();

  public today = new Date();
}
