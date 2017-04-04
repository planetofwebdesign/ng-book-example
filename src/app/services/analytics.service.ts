import { Injectable } from '@angular/core';
import {
	Matric,
	AnalyticsInterface
} from '../user-analytics/user-analytics.interface';


@Injectable()
export class AnalyticsService{

	constructor( private implimentation: AnalyticsInterface){}

	record(matric: Matric){
		this.implimentation.recordEvent(matric);
	}
}