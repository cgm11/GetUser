import { Component, OnInit, Input } from '@angular/core';

//services
import { UserManagerService } from '../../services/user-manager.service';
//models
import { IUserResponse, IUser} from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string;
  profession: string;
  gender: string;
  knowFor: string;
  @Input() person: any;

  constructor( private userManagerService: UserManagerService ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    this.userManagerService
    .getPerson()
    .subscribe((response: IUserResponse) =>{
      const {data} = response;
      const { name, profession, gender, knowFor }: IUser = data;
      this.name = `${name.first} ${name.last}`;
      this.profession = profession;
      this.gender = gender;
      this.knowFor = knowFor;
    });
  }

}
