import { Router } from '@angular/router';
import { Technician } from './../technician.model';
import { TechnicianService } from 'src/app/components/technician/technician.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technician-create',
  templateUrl: './technician-create.component.html',
  styleUrls: ['./technician-create.component.css']
})
export class TechnicianCreateComponent implements OnInit {

  constructor(private technicianService: TechnicianService, private router: Router) { }

  ngOnInit(): void {
  }

  createTechnician(): void {
    this.technicianService.showMessage('Operação feita!')
  }
  cancel(): void{
    this.router.navigate(['/technician'])
  }
}

