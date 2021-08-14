import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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

  ngOnInit(): void {
    this.getPolicies();
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

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line' as ChartType;

}
