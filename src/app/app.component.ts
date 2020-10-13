import { Component, OnInit } from '@angular/core';

//services
import { UserManagerService } from './user/services/user-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private userManagerService: UserManagerService ) { }

  ngOnInit(): void {
  }

  /*getPerson(){
    this.userManagerService
    .getPerson()
    .subscribe((response: any) =>{
      console.log(response);
    })
  }*/
}
