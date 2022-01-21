import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../../../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Offer {
  id: number;
  image_url: string;
  title: string;
  hours: number;
  price: number;
}

const NONE_INDEX = -1;

@Component({
  selector: 'osg-personal-trainer-offers',
  templateUrl: './offers.component.html'
})
export class PersonalTrainerOffersComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;
  @ViewChild('offerImage') offerImage: ElementRef;

  uploadForm: FormGroup;
  trainer_user_id = 0;

  offers: Array<Offer> = new Array();
  customOptions: OwlOptions = {
    stagePadding: 0,
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: true,
    items: 1
  }
  width: string;
  editIndex = NONE_INDEX;

  offer_image_url: string = "";
  offer_title = "";
  offer_hours = 0;
  offer_price = 0;

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  constructor(private dataService: DataService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.width = window.innerWidth.toString();

    this.uploadForm = this.formBuilder.group({
      image: '',
    })

    // get offers
    let url = '/trainer/getOffer';
    if (this.activatedRoute.snapshot.params.handle != undefined) {
      const user_id = this.activatedRoute.snapshot.params.handle;
      url += '?user_id=' + user_id;
    }

    this.http.get(url).subscribe((resp: any) => {
      this.offers = resp.result;
      this.offers.map(offer => {
        if (offer.image_url == '') {
          offer.image_url = '/assets/images/logo.png';
        }
      })
    })
  }

  /**
    this is called when the user clicks edit button
   */
  onClickEditing = (index) => {
    this.editIndex = index;

    this.offer_image_url = this.offers[index].image_url;
    this.offer_title = this.offers[index].title;
    this.offer_hours = this.offers[index].hours;
    this.offer_price = this.offers[index].price;

    this.offerImage.nativeElement.value = null;
    this.offerImage.nativeElement.addEventListener("change", this.onChangeImage);
  }

  /**
    this is called when the user changes image
   */
  onChangeImage = (evt) => {
    console.log('>>> offer image changed');
    const file = this.offerImage.nativeElement.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.offer_image_url = reader.result as string;
    }
  }

  /**
    this is called when the user clicks image edit button
   */
  onClickImage = (index) => {
    if (index == this.editIndex)
      this.offerImage.nativeElement.click();
  }

  /**
    this is called when the user clicks save button
   */
  save = (index) => {
    console.log('>>> save: ', index)

    const formData = new FormData();
    const file = this.offerImage.nativeElement.files[0];
    console.log('>>> image file data: ', file);
    formData.append('image', file);
    formData.append('id', String(this.offers[index].id));
    formData.append('title', this.offer_title);
    formData.append('price', String(this.offer_price));
    formData.append('hours', String(this.offer_hours));

    this.http.post('/trainer/updateOffer', formData).subscribe((resp: any) => {
      console.log('>>> offer update api result: ', resp);
      if (!resp.success) {

      }
    })

    this.offers[index].image_url = this.offer_image_url;
    this.offers[index].title = this.offer_title;
    this.offers[index].hours = this.offer_hours;
    this.offers[index].price = this.offer_price;

    this.editIndex = NONE_INDEX;
  }

  /**
    this is called when the user clicks cancel button
   */
  cancel = () => {
    this.editIndex = NONE_INDEX;
  }
}
