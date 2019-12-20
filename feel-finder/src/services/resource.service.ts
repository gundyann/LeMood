import { Injectable } from '@angular/core';
import commentResource from './resources/commentResource.json';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private service :ResourceService;

  constructor() { }

  getResourceService() :ResourceService{    
    if(this.service == null){
      this.service = new ResourceService();
    }
    return this.service;
  }

  createCommentRessource(comment :string) :any{
    var newResource = commentResource;
    newResource.effectiveDateTime = this.getTime();
    newResource.valueString = comment;
    return newResource;
  }

  createTagsRessource(tags :string[]) :string{

    return "";
  }

  createDiaryRessource(){

  }

  private getTime() :string{
    var date = new Date();
    return date.toISOString();
  }





}
