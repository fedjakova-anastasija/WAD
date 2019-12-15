import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHead: boolean = true;

  ngOnInit() {
  }
  
  constructor(private router: Router) {
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/home') {
            this.showHead = false;
          } else {
            this.showHead = true;
          }
        }
      });
    }
}
