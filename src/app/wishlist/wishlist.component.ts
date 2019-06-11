// import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.css']
// })
// export class WishlistComponent implements OnInit {

//   @Output() public childEvent=new EventEmitter();

//   constructor() { }

//   ngOnInit() {
//   }
//   fireEvent(value){
//     this.childEvent.emit(value);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';
import { Track } from '../track';

@Component({
 selector: 'app-wishlist',
 templateUrl: './wishlist.component.html',
 styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 array: any = [];
 track=Track[100]

 constructor(private musicService: MusicService ,private route :Router) { }

 ngOnInit() {
       this.musicService.getWishlist().subscribe((data:any) => {
         this.track=data
       });
 }

}