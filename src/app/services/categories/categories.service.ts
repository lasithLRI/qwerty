import { Injectable } from '@angular/core';
import {Category_modal} from "../../modals/category_modal";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  categoriesList: Category_modal[] = [
    {
      id: 1,
      mainCategory: "Electrical",
      subCategories: {
        categoryList: [
          { subId: 1, subName: "Wiring" },
          { subId: 2, subName: "Lighting" },
          { subId: 3, subName: "Circuit Breakers" }
        ]
      }
    },
    {
      id: 2,
      mainCategory: "Carpentry",
      subCategories: {
        categoryList: [
          { subId: 4, subName: "Furniture Making" },
          { subId: 5, subName: "Cabinetry" },
          { subId: 6, subName: "Woodworking Tools" }
        ]
      }
    },
    {
      id: 3,
      mainCategory: "Mason",
      subCategories: {
        categoryList: [
          { subId: 7, subName: "Bricklaying" },
          { subId: 8, subName: "Concrete Work" },
          { subId: 9, subName: "Stone Masonry" }
        ]
      }
    },
    {
      id: 4,
      mainCategory: "Healthcare",
      subCategories: {
        categoryList: [
          { subId: 10, subName: "Nursing" },
          { subId: 11, subName: "Medical Equipment" },
          { subId: 12, subName: "Pharmacy" }
        ]
      }
    },
    {
      id: 5,
      mainCategory: "Plumbing",
      subCategories: {
        categoryList: [
          { subId: 13, subName: "Pipe Installation" },
          { subId: 14, subName: "Drainage Systems" },
          { subId: 15, subName: "Water Heaters" }
        ]
      }
    },
    {
      id: 6,
      mainCategory: "Painting",
      subCategories: {
        categoryList: [
          { subId: 16, subName: "Interior Painting" },
          { subId: 17, subName: "Exterior Painting" },
          { subId: 18, subName: "Paint Types" }
        ]
      }
    },
    {
      id: 7,
      mainCategory: "Gardening",
      subCategories: {
        categoryList: [
          { subId: 19, subName: "Landscaping" },
          { subId: 20, subName: "Plant Care" },
          { subId: 21, subName: "Garden Tools" }
        ]
      }
    },
    {
      id: 8,
      mainCategory: "IT Support",
      subCategories: {
        categoryList: [
          { subId: 22, subName: "Hardware Troubleshooting" },
          { subId: 23, subName: "Software Installation" },
          { subId: 24, subName: "Network Setup" }
        ]
      }
    },
    {
      id: 9,
      mainCategory: "Cleaning Services",
      subCategories: {
        categoryList: [
          { subId: 25, subName: "Residential Cleaning" },
          { subId: 26, subName: "Commercial Cleaning" },
          { subId: 27, subName: "Specialized Cleaning" }
        ]
      }
    },
    {
      id: 10,
      mainCategory: "Automotive",
      subCategories: {
        categoryList: [
          { subId: 28, subName: "Engine Repair" },
          { subId: 29, subName: "Body Work" },
          { subId: 30, subName: "Tire Services" }
        ]
      }
    }
  ];
}
