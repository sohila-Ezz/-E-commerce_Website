import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../ViewModels/icategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}
  getAllCateogories():Observable<ICategory[]>{
    return this.HttpClient.get<ICategory[]>('https://localhost:44388/api/Categories');
   }
  
  getCategoryByID(ID:number):Observable<ICategory>{
      return this.HttpClient.get<ICategory>(`${environment.APIBaseURL}/api/Categories/${ID}`)
   }
  addCategory(NewCategory:ICategory):Observable<ICategory>
  {
    return this.HttpClient.post<ICategory>(`${environment.APIBaseURL}/api/Categories/`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateCategory(id:number, updateCategory:ICategory):Observable<ICategory>
  {
    return this.HttpClient.patch<ICategory>(`${environment.APIBaseURL}/api/Categories/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
}
