import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../models/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personList : Array<Person> = [];

  constructor(public navCtrl: NavController) {
    this.personList = [
      {
        name: "Steve Rogers",
        bloodType:"O+ve",
        contactNumber: "1800-800-9999",
        lastDonated : new Date(),
        address: {
          line1:"",
          line2:"",
          city:"",
          state:"",
          pincode:"",
        },
        profilePicture:"../../assets/imgs/steve.jpg"
      },
      {
        name: "Tony Stark",
        bloodType:"A+ve",
        contactNumber: "1800-800-9999",
        lastDonated : new Date(),
        address: {
          line1:"",
          line2:"",
          city:"",
          state:"",
          pincode:"",
        },
        profilePicture:"../../assets/imgs/Tony_Stark.jpg"
      },
      {
        name: "Natasha Romanoff",
        bloodType:"AB-ve",
        contactNumber: "1800-800-9999",
        lastDonated : new Date(),
        address: {
          line1:"",
          line2:"",
          city:"",
          state:"",
          pincode:"",
        },
        profilePicture:"../../assets/imgs/black_widow.jpg"
      },
      {
        name: "Bruce Banners",
        bloodType:"AB+ve",
        contactNumber: "1800-800-9999",
        lastDonated : new Date(),
        address: {
          line1:"",
          line2:"",
          city:"",
          state:"",
          pincode:"",
        },
        profilePicture:"../../assets/imgs/hulk.jpg"
      },
      {
        name: "Peter Parker",
        bloodType:"O-ve",
        contactNumber: "1800-800-9999",
        lastDonated : new Date(),
        address: {
          line1:"",
          line2:"",
          city:"",
          state:"",
          pincode:"",
        },
        profilePicture:"../../assets/imgs/spider-man.jpg"
      },
      {
        name: "Wanda Maximoff",
        bloodType:"B-ve",
        contactNumber: "1800-800-9999",
        lastDonated : new Date(),
        address: {
          line1:"",
          line2:"",
          city:"",
          state:"",
          pincode:"",
        },
        profilePicture:"../../assets/imgs/scarlet_witch.jpg"
      },
    ]
  }

}
