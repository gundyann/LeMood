import { Injectable } from '@angular/core';
import { MidataService } from './midata.service';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { resource } from '../interfaces/resource';
import commentResource from './resources/commentResource.json';
import tagsResource from './resources/tagsResource.json';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private service :ResourceService;

  fhir: JSOnFhir;


  constructor(private midataService :MidataService) { 
    this.fhir = this.midataService.getMidataService();
  }

  createDiaryRessource(comment :string, tags :string[]){
    if(comment != ""){
      var commentRes = this.createCommentRessource(comment);
      this.createResource(commentRes);
    }
    if (tags && tags.length) {   
      var tagsRes = this.createTagsRessource(tags);
      this.createResource(tagsRes);
    }     
  }

  private  createCommentRessource(comment :string) :any{
    var newResource = commentResource;
    newResource.effectiveDateTime = this.getTime();
    newResource.valueString = comment;
    return newResource;
  }

  private createTagsRessource(tags :string[]) :any{
    var newResource = tagsResource;
    newResource.effectiveDateTime = this.getTime();
    var tagsAsString = "";
    tags.forEach(tag => {
      tagsAsString = tagsAsString  + " ";
    });    
    newResource.valueString = tagsAsString;
    return newResource;
  }

  private getTime() :string{
    var date = new Date();
    return date.toISOString();
  }


  private createResource(resource :any){
    this.fhir.create(resource)
    .then(res => {
      if(res){
        console.log(res);
        var result = <resource> res;
        console.log('id: '+ result.id);        
      }
    })
    .catch(err =>{
      console.log(err);
    })
  }
}
