import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

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

  createPolicy(){
    console.log('create policy');
  }
  deletePolicy(policy: Policy){
    console.log(policy);
    console.log('delete policy');
  }

  updatePolicy(policy: Policy){
    console.log(policy);
    console.log('update policy');
  }

}
