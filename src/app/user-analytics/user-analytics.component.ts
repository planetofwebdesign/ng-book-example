import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-user-analytics',
  templateUrl: './user-analytics.component.html',
  styleUrls: ['./user-analytics.component.css']
})
export class UserAnalyticsComponent implements OnInit {

  constructor(private service: AnalyticsService) { 
  		this.service.record({
  			eventName: 'constructor',
  			scope: 'UserAnalyticsComponent'
  		});
  }

  ngOnInit() {
  	this.service.record({
  			eventName: 'Init',
  			scope: 'UserAnalyticsComponent'
  		});
  }

}
