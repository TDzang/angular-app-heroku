import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { User } from '../common/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  UserInfo: any;
  constructor(
    private _htpp: HttpClient,
    private UserService: UserService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.user();
  }

  user() {
    this.UserService.getAll().subscribe((res) => {
      console.log(res);
      if (res.toString() == 'Khong co account') {
        this.Router.navigateByUrl('/login');
        return;
      } else {
        this.UserInfo = res;
      }
    });
  }
}
