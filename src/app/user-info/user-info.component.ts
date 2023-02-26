import { ApiService } from './../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  Id: string|undefined|null;
  user: any={ }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiservice: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (res)=>{
        this.Id = res.get("id");
        if(this.Id){
          this.apiservice.getDetailById(this.Id). subscribe((Data)=>{
            console.log(Data);
            this.user=Data;
          });
        }
      }
    )
  }

}
