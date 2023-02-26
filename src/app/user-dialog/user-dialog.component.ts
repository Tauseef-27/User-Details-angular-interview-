import { ApiService } from './../service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  UserData : any;
  id!: number;
  // route: any;

  constructor  (private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject (MAT_DIALOG_DATA)
     private dialogRef : MatDialogRef<UserDialogComponent>,private route: ActivatedRoute){ }

    //  fetchData(id:any){
    //   this.api.getAllDetails(id).subscribe((res=>{
    //     this.UserData = res;
    //   }))
    //  }

    ngOnInit(): void{

    };


}

