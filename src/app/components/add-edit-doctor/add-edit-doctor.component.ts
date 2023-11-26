import { Component, Input, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/api-handler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-doctor',
  templateUrl: './add-edit-doctor.component.html',
  styleUrls: ['./add-edit-doctor.component.css']
})
export class AddEditDoctorComponent implements OnInit {

  @Input() doctor : any;

      email: string = "";
      fees: Number = 0;
      name: string = "";
      nmcNumber: string = "";
      phoneNumber: string = "";
      speciality: string = "";

  constructor(private apiService : ApiHandlerService, private router :Router) { }

  ngOnInit(): void {
    this.email = this.doctor.email;
    this.fees = this.doctor.fees;
    this.name = this.doctor.name;
    this.nmcNumber = this.doctor.nmcNumber;
    this.phoneNumber = this.doctor.phoneNumber;
    this.speciality = this.doctor.speciality;
  }
  addDoctor(){
    var doc = {
      email: this.email,
      fee: this.fees,
      name: this.name,
      nmcNumber: this.nmcNumber,
      phoneNumber: this.phoneNumber,
      speciality: this.speciality,
    };
    this.apiService.addDoctor(doc).subscribe((data)=>{
      this.email = '';
      this.fees = 0;
      this.name = '';
      this.nmcNumber = '';
      this.phoneNumber = '';
      this.speciality = '';
    })
    
  }

  updateDoctor(){
    var doc = {
      id: this.doctor.id,
      email: this.email,
      fee: this.fees,
      name: this.name,
      nmcNumber: this.nmcNumber,
      phoneNumber: this.phoneNumber,
      speciality: this.speciality,
    };

    this.apiService.updateDoctor(doc).subscribe((data)=>{
      alert("Doctor edited succesfully");
      
    });
    this.router.navigate(['/doctor']);
  }

}
