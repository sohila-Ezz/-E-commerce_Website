import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../ViewModels/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpOptions
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  }
  }
  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/Products`);
   }
  getProductsByCategoryID(catID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/Products/GetProductByCategorID?CatID=${catID}`)
 }
  getProductByID(ID:number):Observable<IProduct>{
      return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/Products/${ID}`)
   }
  addProduct(Newproduct:IProduct):Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/Products`, JSON.stringify(Newproduct),this.httpOptions);
  }
  UpdateProduct(id:number, upproduct:IProduct):Observable<IProduct>
  {
    return this.httpClient.patch<IProduct>(`${environment.APIBaseURL}/Products/${id}`, JSON.stringify(upproduct),this.httpOptions);
  }
}
