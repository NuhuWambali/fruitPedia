import { Component } from '@angular/core';
interface Product {
  name: string;
  price: number;
  productImage:string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  totalLenght:any;
  page:number=1;
  products: Product[] = [
    { name: 'Product A', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product B', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product D', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product E', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product F', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product G', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product H', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product I', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product J', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product K', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product L', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product M', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product N', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product O', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product P', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product Q', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product R', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product S', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product T', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product U', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product v', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product W', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product X', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product Y', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product z', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 1', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 2', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 3', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 4', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 5', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 6', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 7', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 8', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
    { name: 'Product 9', price: 500, productImage:'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1380&t=st=1691008712~exp=1691009312~hmac=8f5ec93eb1fc80bfe22bdc0d8c1656ade3c2b6e268d82f02afd9455d81749da9'},
  ]

}
