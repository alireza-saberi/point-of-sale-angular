import { DrinkService } from '../drink.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})
export class ShopComponentComponent implements OnInit {

  private drinkList;
  private total = 0;
  private cart = [];

  constructor(private drinkService: DrinkService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks() {
    this.drinkList = this.drinkService.getDrinks();
  }

  addCart(drink) {
    this.total += drink.price();
    this.cart.push(drink);
  }

  removeCart(drink, index) {
    this.total -= drink.price();
    this.cart.splice(index, 1);
  }

  imgSrc(drink) {
    return 'https://source.unsplash.com/' + drink.img + '/400x225';
  }


  //   Bootstrap Modal
  open(content) {
    this.modalService.open(content);
  }
}
