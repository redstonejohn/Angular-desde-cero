import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { ProductComponent } from "./components/product/product.component"
import { Product } from './models/product.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //Aqui van los valores que se quieran pasar al HTML (se ingresan en doble llaves {{ valor }})
  title = 'redstoneaira';
  http = inject(HttpClient)
  products: Product[] = []; //<--aqui

  changeTitle() {
    this.title = 'Kanae';
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      this.products = data;//<--aqui
    })
  }
}

