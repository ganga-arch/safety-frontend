import { Component, OnInit } from '@angular/core';
import { FormSubmittedService } from 'src/app/services/app.service';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.scss']
})
export class ApplicantsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobileNumber', 'email', 'message'];
  dataSource = [];

  constructor(private appService: FormSubmittedService){

  }

  public ngOnInit(): void {
    this.getAllApplicantsList();
  }

  public getAllApplicantsList(): void {
    this.appService.getAll().subscribe((response:any)=> {
      this.dataSource = response;
      console.log(response);
    })
  }
}
