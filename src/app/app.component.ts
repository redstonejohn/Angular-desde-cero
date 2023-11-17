import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
  title = 'redstoneaira';
  http = inject(HttpClient)
  products: Product[] = []; //<--aqui

  changeTitle() {
    this.title = 'Kanae';
  }

  ngOnInit() {
    this.http.get<Product[]>('https://fakestoreapi.com/products/').subscribe((data) => {
      console.log(data)
      this.products = data;//<--aqui
    })
  }
}

