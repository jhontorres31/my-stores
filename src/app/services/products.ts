import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/model.product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient){
    
  }
  
  getAllProducts(){
    return this.http.get<ProductModel[]>('https://api.escuelajs.co/api/v1/products');

  }
}
