import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/api-handler.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {

  ModalTitle : String = '';
  doctorList : any;
  activateAddEditDictirComponent: boolean = false; 
  doctor : any;

  constructor(private apiHandle : ApiHandlerService) { }

  ngOnInit(): void {
    this.refreshDoctorList();
    this.doctor = {
      email: "",
      fees: 0,
      id : '',
      name: "",
      nmcNumber: "",
      phoneNumber: "",
      speciality: ""
    }
  }

  refreshDoctorList(){
    this.apiHandle.getDoctors().subscribe((data)=>{
      this.doctorList = data;
    }
    )
  }

  addClick(){
    this.ModalTitle = 'Add Doctor';
    this.activateAddEditDictirComponent = true;
    this.doctor = {
      email: "",
      fees: 0,
      id : '',
      name: "",
      nmcNumber: "",
      phoneNumber: "",
      speciality: ""
    }

    
  }

  closeClick(){
    this.activateAddEditDictirComponent = false;
    this.refreshDoctorList();
    
  }

  editClick(doctor : any){
    this.ModalTitle = 'Edit Doctor';
    this.activateAddEditDictirComponent = true;
    this.doctor=doctor;
    console.log(doctor);
  }

  deleteClick(doctor : any){
    console.log(doctor);
    this.doctor = doctor;
    if (confirm('Are you sure??')) {
      this.apiHandle.deleteDoctor(this.doctor.id).subscribe((data) => {
        alert('Doctor Deleted Successfully');
        this.refreshDoctorList();
      });
    }
  
  }



}
