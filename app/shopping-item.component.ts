import {Component} from "angular2/core";
import {NgSwitch} from "angular2/core";
import {NgSwitchWhen} from "angular2/core";
import {NgSwitchDefault} from "angular2/core";
import {NgClass} from 'angular2/common';

@Component({
    selector: "shopping",
    template: `
       <h2>Shopping Items</h2>
       <ul>
          <li
          *ngFor="#shopItem of shopItems"
          (click)="onItemClicked(shopItem)"
          >{{ shopItem.name }}</li>
       </ul>

       <span [ngSwitch]=selectedItem.name>
         <p>You selected :
            <span *ngSwitchWhen="'Shirt'">Shirt</span>
            <span *ngSwitchWhen="'Pant'">Pant</span>
            <span *ngSwitchWhen="'Sarees'">Sarees</span>
            <span *ngSwitchWhen="'Jeans'">Jeans</span>
            <span *ngSwitchWhen="'T-Shirt'">T-Shirt</span>
            <span *ngSwitchDefault>Nothing</span>
         </p>
       </span>

       <div [ngStyle]="setStyles(selectedItem.name)" class="text-success">
          Thank you for Selecting an item!!
       </div>

       <button [ngClass]="{active: isActive}" (click)="isActive = !isActive">Buy Items</button>
   `,
    styles: [`
       .button {
          width: 120px;
          border: medium solid black;
       }
       .active {
          background-color: red;
       }
       p{
          font-weight: bold;
       }
   `]
    directives: [NgClass]
})

export class ShoppingListComponent {
    public shopItems = [
        {name: "Shirt"},
        {name: "Pant"},
        {name: "Sarees"},
        {name: "Jeans"},
        {name: "T-Shirt"},
    ];
    public selectedItem = {name: ""};
    onItemClicked(shopItem) {
        this.selectedItem = shopItem;
    }
    setStyles(item) {
        let styles = {
            'font-size'  : item? '24px'   : 'none',
            'visibility' : !item? 'hidden' : 'visible'
        }
        return styles;
    }
}