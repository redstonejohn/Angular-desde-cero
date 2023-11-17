import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from './../../models/product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product', 
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent { 
  @Input() product!: Product;
  

}