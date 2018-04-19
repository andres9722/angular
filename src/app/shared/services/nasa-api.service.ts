import { Injectable } from '@angular/core';
import { Apod } from '../model/apod'
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs/Observable'

const API_KEY = 'EAIDGTKjKzSYIp2gPEChuWlUtROD7FX3X7xcJ4Y5'
const APOD_URL = 'https://api.nasa.gov/planetary/apod'
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000'

@Injectable()
export class NasaApiService {

  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`)
  }

  getMarsImages(camera: string): Observable<any> {
    return this.httpClient.get<Apod>(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`)
  }
}
