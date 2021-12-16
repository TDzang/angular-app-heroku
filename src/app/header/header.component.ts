import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Web } from '../common/web';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  WebData:Web[]=[];
  constructor(private commonService: CommonService,private router: Router) {}

  ngOnInit(): void {
    this.getListWeb();
  }
  getListWeb() {
    this.commonService.ListAllWeb().subscribe((res) => {
      this.WebData=res;
    });
  }
  chuyenTrang(id:number){
    console.log(id);
    this.router.navigate(['/categogy',id]);
  }
}
