import { Component, OnInit } from '@angular/core';
import Emp from '../Emp';
import { EmpDetailsService } from '../emp-details.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  // angForm: FormGroup;
  Emps: Emp[];

  constructor(private ed: EmpDetailsService) { 
    // this.createForm();
  }

  // createForm() {
  //   this.angForm = this.fb.group({
  //     user_name: ['', Validators.required ],
  //     email: ['', Validators.required ],
  //     password: ['', Validators.required ],
  //     phone_number: ['', Validators.required ]
  //   });
  // }

  addEmp(user_name, email, password,phone_number) {
    this.ed.addEmp(user_name, email, password,phone_number);
  }



  ngOnInit() {
    this.ed.getEmp()
    .subscribe((data: Emp[]) => {
      this.Emps = data;
  });
  }

}
