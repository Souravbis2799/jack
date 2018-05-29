import { Component } from '@angular/core';

@Component({
  selector: 'abc',
  templateUrl: './abc.html',
  styleUrls: ['./abc.css']
})
export class abcComponent {
    componentName: 'abcComponent';

    fullImagePath = '../assets/food/c.jpg';

    fullImagePath2 = '../../assets/food/1.jpg';
    fullImagePath3 = '../../assets/food/2.jpg';
    fullImagePath4 = '../../assets/food/3.jpg';
    fullImagePath5 = '../../assets/food/4.jpg';
    fullImagePath6 = '../../assets/food/5.jpg';

    imgClick1(){
      alert("this is chicken lollipop!");
    }
    imgClick2(){
      alert("this is tandoori chicken pizza!");
    }
    imgClick3(){
      alert("this is choclate cake!");
    }
    imgClick4(){
      alert("this is chicken with herbs!");
    }
    imgClick5(){
      alert("this is chicken tikka!");
    }
    imgClick6(){
      alert("this is chicken taco!");
    }
}




