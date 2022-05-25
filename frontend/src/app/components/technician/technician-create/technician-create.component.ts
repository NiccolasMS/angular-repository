import { Router } from '@angular/router';
import { TechnicianService } from 'src/app/components/technician/technician.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technician-create',
  templateUrl: './technician-create.component.html',
  styleUrls: ['./technician-create.component.css']
})
export class TechnicianCreateComponent implements OnInit {

  technician = {
    name: ''
  }

  constructor(private technicianService: TechnicianService, private router: Router) { }

  ngOnInit(): void {
  }

  createTechnician(): void {
      this.technicianService.create(this.technician).subscribe(() =>{
      this.technicianService.showMessage('Técnico cadastrado!')
      this.router.navigate(['/technician'])
    })
  }
  cancel(): void{
    this.router.navigate(['/technician'])
  }
}

