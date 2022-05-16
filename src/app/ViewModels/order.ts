import { IProduct } from "./iproduct";

export interface Order{
    
}
export interface OrderServer {
    total:number;
    data:[{
        product:IProduct;
        numincart:number;
    }];
    }
    export interface OrderPublic {
        total:number;
        Prodata:[{
            id:number;
            incart:number;
        }];
    }