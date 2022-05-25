import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technician } from './technician.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  baseUrl = "http://localhost:3001/technical";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '',{
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(technician: Technician): Observable<Technician>{
    return this.http.post<Technician>(this.baseUrl, technician);
  }
}
