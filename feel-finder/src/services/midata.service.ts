import { Injectable } from '@angular/core';
import { JSOnFhir } from '@i4mi/js-on-fhir';

@Injectable({
  providedIn: 'root'
})
export class MidataService {

  fhir: JSOnFhir;

  constructor() {
    const callback = window.origin + '/FeelFinder';
    console.log(callback);
    
    
    if(this.fhir == null){
      this.fhir = new JSOnFhir('https://test.midata.coop', 'lemood', callback ); 
    }
   }

  getMidataService() :JSOnFhir{ 
    return this.fhir;
  }
}
