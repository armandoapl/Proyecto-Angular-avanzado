import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['.sidebar-nav > ul > li > a.active { font-weight: 400; background:#252933; color: #26c6da; }' ]
})
export class SidebarComponent implements OnInit {


  menuItems: any[] = [];

  constructor(private sideBarService: SidebarService) {
    this.menuItems = sideBarService.menu;
   }

  ngOnInit(): void {
  }

}
