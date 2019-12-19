import { Injectable } from '@angular/core';
import { JSOnFhir } from '@i4mi/js-on-fhir';

@Injectable({
  providedIn: 'root'
})
export class MidataService {

  fhir: JSOnFhir;

  constructor() {

    if(this.fhir == null){
      this.fhir = new JSOnFhir('https://test.midata.coop', 'lemood', window.location.href.toString());
    }
   }

  getMidataService() :JSOnFhir{ 
    return this.fhir;
  }
}
