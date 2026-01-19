import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../core/items.service';

@Component({
  selector: 'app-items',
  standalone: false,
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  
  constructor(private itemsService: ItemsService) {}
  ngOnInit() {
    console.log('ItemsComponent initialized');
    this.itemsService.getItems().subscribe(data => {
      this.items = data;
    });
  }

}
