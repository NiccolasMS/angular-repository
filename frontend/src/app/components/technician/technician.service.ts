import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'Fechar',{
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
