import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Skillb } from '../model/skillb';

@Injectable({
  providedIn: 'root'
})
export class SkillbService {

  // URL = 'http://localhost:8080/skillB/'

  URL = environment.URL + 'skillB/'
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skillb[]> {
    return this.httpClient.get<Skillb[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skillb> {
    return this.httpClient.get<Skillb>(this.URL + `detail/${id}`);
  }

  public save(Skillb: Skillb): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', Skillb);
  }

  public update(id: number, Skillb: Skillb): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, Skillb);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }


}
