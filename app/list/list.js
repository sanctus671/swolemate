import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../data/data';

@Page({
  templateUrl: 'build/pages/list/list.html',
})
export class ListPage {
  constructor(nav: NavController, dataService:DataService) {
      this.nav = nav;
      this.dataService = dataService;
      this.items = [];
      
      this.dataService.getData().then((items) => {
          this.items = JSON.parse(items) || [];
      })
      
      
    }
    
    addItem(){
        this.nav.push(AddItemPage, {listPage:this});
    }
    
    viewItem(item){
        this.nav.push(ItemDetailPage, {item:item});
    }
}
