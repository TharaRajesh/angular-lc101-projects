import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty disdhwasher'];
   finishedChores = ['Clean Kitchen', 'Complete LaunchCode prep work', 'Buy groceries','call mom'];

   targetImage = "https://tse1.mm.bing.net/th?id=OIP.q_R0wupwd4a6J2aMOrLKQQHaHa&amp;pid=Api&amp;P=0&amp;w=300&amp;h=300";

   constructor() { }

   ngOnInit() {
   }

}
