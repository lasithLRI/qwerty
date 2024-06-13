import {Category_modal} from "./category_modal";

export interface Posts_modal{
  userName:string;
  date:Date
  images:images;
  description:string;
  contactNumber:string;
  price:number;
  category:Category_modal;
  title:string;
}

export interface images{
  urls:["https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150"]
}

export interface PostsList{
  product:Posts_modal;
  imagesList:images;
}

