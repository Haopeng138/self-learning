import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})


export class ProductsPage implements OnInit {

  products = new Observable<Product[]>();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

}
