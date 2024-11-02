import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PiesService } from '../pies.service';
import { Cart } from '../product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private pieService = inject(PiesService);
  public cart$: Observable<Cart> = this.pieService.getCart();
}
