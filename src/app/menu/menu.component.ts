import {Component , Inject , OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import { flyInOut , expand } from '../animations/app.animation';
import {DishService} from '../services/dish.service';
@Component({
  templateUrl: './menu.component.html' ,
  selector: 'app-menu' ,
  styleUrls: ['./menu.component.scss']
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;
  selectedDish: Dish;

    constructor(private dishService: DishService ,
              @Inject('BaseURL') public BaseURL) {
  }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes ,
      errmess => this.errMess = <any>errmess);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
