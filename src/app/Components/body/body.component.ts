import { Component, OnInit, Output, SimpleChange, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory} from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Order } from 'src/app/ViewModels/order';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  selectedCatID:number;
  CatList:ICategory[];
  filtProduct:IProduct[];
  @Output() orderProductedSelected:EventEmitter<Order>;
  orderProduct!:Order;
  constructor(private CategoryService:CategoryService,private ProductService:ProductService, private router:Router, private San:DomSanitizer, private cart:CartService) { 
    this.selectedCatID=0;
    this.CatList=[];
    this.filtProduct=[];
    this.orderProductedSelected=new EventEmitter<Order>();
  }

  ngOnInit(): void {
    this.CategoryService.getAllCateogories().subscribe(data=>{
      console.log(data);
      this.CatList=data;
    })
    this.ProductService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.filtProduct=data;
      this.filtProduct.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
    })

  }
  
  ngOnChanges(changes: SimpleChange): void {

}

showProducts(id:number){
  this.ProductService.getProductsByCategoryID(id).subscribe(data=>{
    console.log(data);
    this.filtProduct=data;
    this.filtProduct.forEach(element => {
      element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
    });
   
  })
} 
addtoOrder(item:number){

  this.cart.addtoCart(this.ProductService.getProductByID(item));
  console.log( this.ProductService.getProductByID(item));
}

// addtoOrder(id:number){
//   let product=this.ProductService.getProductByID(id);
//   //  let product= this.productList.find(p=>p.ID==id);
//         // this.orderProduct={
//         //   id:product!.id,
//         //   name: product!.name,
//         //   ProductImag:product!.Img,
//         //   SelectedQuantity:Quentity,
//         //   prouductPrice:product!.Price,
//         //   TotalPrice:product!.Price* Quentity 
//         // }
//         this.orderProductedSelected.emit(this.orderProduct);

//     }
      }
