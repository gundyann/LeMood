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
    }
    if (tags && tags.length) {   
      var tagsRes = this.createTagsRessource(tags);
    }     
    Promise.all([this.fhir.create(commentRes), this.fhir.create(tagsRes)])
    .then(res => {
    
      console.log("ID: " + this.getID(res[0]));
      console.log("ID: "+ this.getID(res[1]));
    })
    .catch(err =>{
      console.log(err);
    })
  }

  private getID(result :any) :string{
    var resource = <resource> result;
    return resource.id;
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
    tags.forEach(tag => tagsAsString = tagsAsString + tag + " ");        
    newResource.valueString = tagsAsString;
    
    return newResource;
  }

  private getTime() :string{
    var date = new Date();
    return date.toISOString();
  }

}
