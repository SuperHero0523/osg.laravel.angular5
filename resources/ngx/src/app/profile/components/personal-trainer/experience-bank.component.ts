import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ExpBankRow, ProgramCategory, ExpBankPrograms } from '../../../types';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';

export class Review {
  rate: number;
  name: string;
  description: string;
}

type TrainerExpBank = {
  data: ExpBankRow[];
  athletes: ExpBankRow;
  programs: ExpBankPrograms;
};

@Component({
  selector: 'osg-personal-trainer-experience-bank',
  templateUrl: './experience-bank.component.html'
})
export class PersonalTrainerExperienceBankComponent implements OnInit{

  @Input() applicationUser: ApplicationUser;
  reviews: Array<Review> = new Array();
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

  expBankData: TrainerExpBank = {
    data: [
      { weight_min: 50, weight_max: 59, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 60, weight_max: 69, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 70, weight_max: 79, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 80, weight_max: 89, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 90, weight_max: 99, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 100, weight_max: 109, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 110, weight_max: 119, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
      { weight_min: 120, weight_max: 200, untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
    ],
    athletes: { untrained: "", novice: "", intermediate: "", advanced: "", elite: "" },
    programs: { untrained: [], novice: [], intermediate: [], advanced: [], elite: [] },
  };

  selGender: any = {key: "male", name: "Men"};
  genderList: any[] = [
    {key: "male", name: "Men"},
    {key: "female", name: "Women"},
  ]

  selCategory: ProgramCategory = { key: "strength", name: "strength" };
  categoryList: ProgramCategory[] = [
    {key: "strength", name: "strength"},
    {key: "hypertrophy", name: "hypertrophy"},
    {key: "muscular", name: "muscular endurance"},
    {key: "power", name: "power"}
  ]

  get from_other_profile() {
    return this.dataService.from_other_profile;
  }

  constructor(private http: HttpClient,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.width = window.innerWidth.toString();
    this.reviews = [
      {rate: 5, name: "Alex James", description: "Best coach I have worked with!"},
      {rate: 4, name: "Clara Smith", description: "Passion and dedication! Recommended!"},
      {rate: 3, name: "James Bond", description: "Passion and dedication! Recommended!"},
      {rate: 2, name: "Json Kidd", description: "Best coach I have worked with!"},
      {rate: 3, name: "Leboron James", description: "Passion and dedication! Recommended!"},
      {rate: 4, name: "Alex Sanchez", description: "Passion and dedication! Recommended!"},
      {rate: 5, name: "Lionel Messi", description: "Best coach I have worked with!"},
      {rate: 3, name: "Iker Casilas", description: "Passion and dedication! Recommended!"},
      {rate: 5, name: "Marco Asensio", description: "Passion and dedication! Recommended!"}
    ];

    this.loadExpBankData();
  }

  onChangeGender = (gender) => {
    if (gender.key == this.selGender.key) return;

    this.selGender = gender;
    this.loadExpBankData();
  }

  onChangeCategory = (category: ProgramCategory) => {
    if (category.key == this.selCategory.key) return;

    this.selCategory = category;
    this.loadExpBankData();
  }

  loadExpBankData = () => {

    let trainer_id = this.applicationUser.profile.user_id;
    if (this.from_other_profile) {
      trainer_id = this.activatedRoute.snapshot.params.handle
    }

    let url = '/trainer/getExpBankData?trainer_id=' + trainer_id + "&gender=" + this.selGender.key + "&category=" + this.selCategory.key
    this.http.get(url).subscribe((resp: any) => {
      console.log('>>> exp bank data api result: ', resp);
      this.expBankData.data = [];
      for (let row of resp.result.data) {
        const expBankRow: ExpBankRow = {
          weight_min: row.weight_min,
          weight_max: row.weight_max,
          untrained: row.untrained,
          novice: row.novice,
          intermediate: row.intermediate,
          advanced: row.advanced,
          elite: row.elite,
        }
        this.expBankData.data.push(expBankRow);
      }

      this.expBankData.athletes.untrained = resp.result.athletes.untrained;
      this.expBankData.athletes.novice = resp.result.athletes.novice;
      this.expBankData.athletes.intermediate = resp.result.athletes.intermediate;
      this.expBankData.athletes.advanced = resp.result.athletes.advanced;
      this.expBankData.athletes.elite = resp.result.athletes.elite;

      this.expBankData.programs.untrained = resp.result.programs.untrained;
      this.expBankData.programs.novice = resp.result.programs.novice;
      this.expBankData.programs.intermediate = resp.result.programs.intermediate;
      this.expBankData.programs.advanced = resp.result.programs.advanced;
      this.expBankData.programs.elite = resp.result.programs.elite;
    })
  }
}
