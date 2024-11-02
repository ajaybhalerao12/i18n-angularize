import { Component, inject } from '@angular/core';
import { PiesService } from '../pies.service';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [HeroComponent,CommonModule],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.scss'
})
export class CafeComponent {
  private pieService = inject(PiesService);
  public preparing = this.pieService.getFresh();
}

