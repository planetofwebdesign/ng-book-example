import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl ,FormGroup ,FormBuilder,FormControl } from '@angular/forms';



function skuValidator(formControl: FormControl): { [s: string]:  boolean} {

  	if(!formControl.value.match(/^123/)){
  		return {invalidSku: true};
  	}
 }

@Component({
  selector: 'app-sku-form-validation',
  templateUrl: './sku-form-validation.component.html',
  styleUrls: ['./sku-form-validation.component.css']
})
export class SkuFormValidationComponent implements OnInit {
  
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {

  	this.myForm = fb.group({

  		'sku':['',Validators.compose([
  			 Validators.required, skuValidator
  		])]
  	});

  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
  	console.log("You submitted the value : ",form);
  	
  }


}
