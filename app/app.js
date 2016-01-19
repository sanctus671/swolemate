import {App, Platform, Config} from 'ionic/ionic';
import {ListPage} from './list/list';
import {DataService} from './data/data';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
  providers:[DataService],
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {}

})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = ListPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
