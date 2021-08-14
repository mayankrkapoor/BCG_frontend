import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  constructor(
    private policyServie : PolicyService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  message = '';
  policy : any;

  ngOnInit(): void {
    this.message = '';
    this.getPolicyById(this.route.snapshot.paramMap.get('id'));
  }

  getPolicyById(id: any): void {
    this.policyServie.getById(id)
    .subscribe(
      policy => {
        this.policy = policy;
        console.log(policy);
      },
      error => {
        console.log(error);
      }
    )
  }

  updatePolicy(): void {
    this.policyServie.update(this.policy.id, this.policy)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Policy Updated!'
      },
      error =>{
        console.log(error);
        this.message = 'Update failed!!';
      }
    )
  }

  processForm() {
    console.log('form processed.');
  }

}
