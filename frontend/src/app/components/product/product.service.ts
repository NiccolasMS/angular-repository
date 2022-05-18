import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '',{
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product : Product){
    return this.http.post(this.baseUrl, product)
  }
}
