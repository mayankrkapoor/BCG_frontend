import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-metrics',
  templateUrl: './policy-metrics.component.html',
  styleUrls: ['./policy-metrics.component.css']
})
export class PolicyMetricsComponent implements OnInit {

  constructor(private policyService : PolicyService) { }

  policies: any;
  customer_id : any;
  cngCount: number;
  petrolCount: number;
  desielCount: number;

  ngOnInit(): void {
    // this.getPolicies();
    this.getCountbyFuel();
  }

  getPolicies(): void {
    this.policyService.getAll()
    .subscribe(
      (policies) => {
        this.policies = policies;
        console.log(policies);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getCountbyFuel(): void {
    this.policyService.getByFuelType('CNG')
    .subscribe(
      (cng) => {
        this.cngCount = cng.count;
        console.log(cng);
      },
      (error) => {
        console.log(error);
      }
    );
    this.policyService.getByFuelType('Petrol')
    .subscribe(
      (petrol) => {
        this.petrolCount = petrol.count;
        console.log(petrol);
      },
      (error) => {
        console.log(error);
      }
    );
    this.policyService.getByFuelType('Diesel')
    .subscribe(
      (diesel) => {
        this.desielCount = diesel.count;
        console.log(diesel);
      },
      (error) => {
        console.log(error);
      }
    );
  }



  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['CNG', 'Petrol', 'Diesel'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [81, 368, 275], label: 'Policy by Fuel types' }
  ];

  doughnutChartLabels: Label[] = ['CNG', 'Petrol', 'Diesel'];
  doughnutChartData: MultiDataSet = [
    [81, 368, 275]
  ];
  doughnutChartType: ChartType = 'doughnut';


  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['CNG'], ['Petrol'], 'Diesel'];
  public pieChartData: SingleDataSet = [81, 368, 275];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


}
