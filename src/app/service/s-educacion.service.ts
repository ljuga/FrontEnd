import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {

    // URL = 'http://localhost:8080/explab/'

    URL = environment.URL + 'edu/'


    constructor(private httpClient: HttpClient, public storage: AngularFireStorage) { }
  
    public lista(): Observable<Educacion[]> {
      return this.httpClient.get<Educacion[]>(this.URL + 'lista');
    }
  
    public detail(id: number): Observable<Educacion> {
      return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
    }
  
    public save(educacion: Educacion): Observable<any> {
      return this.httpClient.post<any>(this.URL + 'create', educacion);
    }
  
    public update(id: number, educacion: Educacion): Observable<any> {
      return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
    }
  
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
  
    uploadImage(file: any, path: string, name: string): Promise<string> {
      return new Promise(resolve => {
        const filePath = path + '/' + name;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        task.snapshotChanges().pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe( res =>{
              const downloadURL = res;
              resolve(downloadURL);
              return;
            });
          })
        )
          .subscribe();
  
        
      })
  
    }
  
}
