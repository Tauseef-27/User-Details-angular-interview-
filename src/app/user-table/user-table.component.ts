import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  displayedColumns: any[] = ['title','body','userDetails'];
  dataSource!: MatTableDataSource<any>;

  constructor(private dialog : MatDialog, private api : ApiService,
    private router: Router){

  }
  ngOnInit(): void{
    this.getAllDetails();

  };

  getAllDetails(){
    this.api.getDetails()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      },
      error:(err)=>{
        alert("Error while fetching data")
      }
     })
  }


}
