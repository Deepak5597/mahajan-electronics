import { Component, OnInit } from '@angular/core';
import { MenuModel } from './menu.model';

@Component({
  selector: 'me-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.menuConfig = new MenuModel().menuItems;
  }

  menuConfig:any[]= [];
  currentNavIndex:number=0;
}
