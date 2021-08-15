import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html',
  styleUrls: ['./policy-search.component.css']
})
export class PolicySearchComponent implements OnInit {

  constructor(private policyService : PolicyService, private router:Router) { }

  id: any;
  ngOnInit(): void {
  }

  searchByPolicyId(id:any){
  this.policyService.setId(id);
  console.log('search by policy id');
  this.router.navigate([`/policy/${id}`]);
  console.log(id);
  }

  searchByCustomerId(id:any){
    this.policyService.setCustomerId(id);
    console.log('search by customer id');
    console.log(id);
    }
}
