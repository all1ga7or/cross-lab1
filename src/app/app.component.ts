import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonMenuToggle, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' ,
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonMenuToggle, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, RouterLink],
})
export class AppComponent {
  constructor() {
    
  }
}
