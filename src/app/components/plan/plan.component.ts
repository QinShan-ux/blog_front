import { Component } from '@angular/core';
import { GetLocalDataService } from '../../service/get-local-data/get-local-data.service'
import { Plan } from '../../model/plan'
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  constructor(private getLocalData: GetLocalDataService) {

  }
  private url = 'assets/json/plan.json'
  plan_list: Plan[] = [];
  getJson() {
    console.log(this.getLocalData.get_local_data(this.url))
  }
}
