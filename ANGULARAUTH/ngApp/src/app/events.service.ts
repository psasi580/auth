import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _evntUrl="http://localhost:3000/api/events"
  private _specialUrl="http://localhost:3000/api/special"
  constructor(private httpClient: HttpClient) { }
  getEvents(){
    return this.httpClient.get<any>(this._evntUrl)
  }
  getSpecialEvents(){
    return this.httpClient.get<any>(this._specialUrl)
  }
}
