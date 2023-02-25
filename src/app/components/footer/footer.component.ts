import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormSubmittedService } from 'src/app/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public frmRegister: FormGroup = {} as FormGroup;
  constructor(private _fb: FormBuilder, private formService: FormSubmittedService) {}
  ngOnInit(): void {
    this.frmRegister = this._fb.group({
      firstName: ['',Validators.required],
      lastName: '',
      email: ['',Validators.required],
      mobileNumber: ['',Validators.required],
      message: ['',Validators.required],
    });
  }

  public submitVal(event: any): void {
    console.log(event);
    this.formService.create(event).subscribe((res:any)=> {
      if(res) {
       this.frmRegister.reset();
      }
    });
  }

  public getAll(): void {
    this.formService.getAll().subscribe((res:any)=> {
      if(res) {
        // Code Here
      }
    })
  }
}
