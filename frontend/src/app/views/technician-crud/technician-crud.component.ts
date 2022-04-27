import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technician-crud',
  templateUrl: './technician-crud.component.html',
  styleUrls: ['./technician-crud.component.css']
})
export class TechnicianCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreateTechnician(): void{
    this.router.navigate(['technician/create'])
  }
}  
