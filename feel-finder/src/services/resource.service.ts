import { Injectable } from '@angular/core';
import { MidataService } from './midata.service';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { resource } from '../interfaces/resource';
import commentResource from './resources/commentResource.json';
import tagsResource from './resources/tagsResource.json';
import diaryResource from './resources/diaryResource.json';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private service :ResourceService;

  fhir: JSOnFhir;


  constructor(private midataService :MidataService) { 
    this.fhir = this.midataService.getMidataService();
  }

  createDiaryRessource(comment :string, tags :string[]) :Promise<string>{
    return new Promise((resolve, reject) => {
      if(comment != ""){
        var commentRes = this.buildCommentRessource(comment);
      }
      if (tags && tags.length) {   
        var tagsRes = this.buildTagsRessource(tags);
      }     
      Promise.all([this.fhir.create(commentRes), this.fhir.create(tagsRes)])
      .then(res => {      
        var resultResource1 = <resource> res[0];
        var resultResourde2 = <resource> res[1];
        console.log("ID: " + this.getID(res[0]));
        console.log("ID: "+ this.getID(res[1]));
        this.fhir.create(this.buildDiaryRessource(resultResource1, resultResourde2))
        .then(res => {
          console.log(res);          
        })
        .catch(err => {
          console.log(err);          
        })

        resolve("Tagebucheintrag wurde gespeichert.");
      })
      .catch(err =>{
        console.log(err);
        reject("Es trat ein Fehelr beim abspeichern des Eintrags auf.");
      })
    })
  }



  private  buildCommentRessource(comment :string) :any{
    var newResource = commentResource;
    newResource.effectiveDateTime = this.getTime();
    newResource.valueString = comment;
    return newResource;
  }

  private buildTagsRessource(tags :string[]) :any{
    var newResource = tagsResource;
    newResource.effectiveDateTime = this.getTime();
    
    var tagsAsString = "";
    tags.forEach(tag => tagsAsString = tagsAsString + tag + " ");        
    newResource.valueString = tagsAsString;
    
    return newResource;
  }


  private buildDiaryRessource(resource1 :resource, resource2 :resource) :any{
    var newResource = diaryResource;
    newResource.effectiveDateTime = this.getTime();
    var res1 = {
      entry: [
        {
            reference: "Observation/"+this.getID(resource1)
        }
      ] 
    };

    var res2 = {
      entry: [
        {
            reference: "Observation/"+this.getID(resource2)
        }
      ] 
    };

    newResource.section.push(res1, res2);
    return newResource;
    
  }

  private getID(result :any) :string{
    var resource = <resource> result;
    return resource.id;
  }

  private getTime() :string{
    var date = new Date();
    return date.toISOString();
  }

}
