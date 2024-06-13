import { Injectable } from '@angular/core';
import {PostsList} from "../../modals/posts_modal";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  postsList: PostsList[] = [
    {
      product: {
        userName: "John Doe",
        date: new Date('2023-01-01'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering wiring services in electrical. Specializing in wiring electrical services. Contact for more details.",
        contactNumber: "1234567890",
        price: 100,
        category: {
          id: 1,
          mainCategory: "Electrical",
          subCategories: {
            categoryList: [
              {subId: 1, subName: "Wiring"},
              {subId: 2, subName: "Lighting"},
              {subId: 3, subName: "Circuit Breakers"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Jane Smith",
        date: new Date('2023-01-02'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering woodworking tools services in carpentry. Specializing in woodworking tools carpentry services. Contact for more details.",
        contactNumber: "0987654321",
        price: 200,
        category: {
          id: 2,
          mainCategory: "Carpentry",
          subCategories: {
            categoryList: [
              {subId: 4, subName: "Furniture Making"},
              {subId: 5, subName: "Cabinetry"},
              {subId: 6, subName: "Woodworking Tools"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Alice Johnson",
        date: new Date('2023-01-03'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering stone masonry services in mason. Specializing in stone masonry mason services. Contact for more details.",
        contactNumber: "1112223333",
        price: 300,
        category: {
          id: 3,
          mainCategory: "Mason",
          subCategories: {
            categoryList: [
              {subId: 7, subName: "Bricklaying"},
              {subId: 8, subName: "Concrete Work"},
              {subId: 9, subName: "Stone Masonry"}
            ]
          }
        },
        title: 'title:"Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties"'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Bob Brown",
        date: new Date('2023-01-04'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering pharmacy services in healthcare. Specializing in pharmacy healthcare services. Contact for more details.",
        contactNumber: "4445556666",
        price: 400,
        category: {
          id: 4,
          mainCategory: "Healthcare",
          subCategories: {
            categoryList: [
              {subId: 10, subName: "Nursing"},
              {subId: 11, subName: "Medical Equipment"},
              {subId: 12, subName: "Pharmacy"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Charlie Davis",
        date: new Date('2023-01-05'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering water heaters services in plumbing. Specializing in water heaters plumbing services. Contact for more details.",
        contactNumber: "7778889999",
        price: 500,
        category: {
          id: 5,
          mainCategory: "Plumbing",
          subCategories: {
            categoryList: [
              {subId: 13, subName: "Pipe Installation"},
              {subId: 14, subName: "Drainage Systems"},
              {subId: 15, subName: "Water Heaters"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Dana White",
        date: new Date('2023-01-06'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering painting types services in painting. Specializing in painting types painting services. Contact for more details.",
        contactNumber: "0001112222",
        price: 600,
        category: {
          id: 6,
          mainCategory: "Painting",
          subCategories: {
            categoryList: [
              {subId: 16, subName: "Interior Painting"},
              {subId: 17, subName: "Exterior Painting"},
              {subId: 18, subName: "Paint Types"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] }
    },
    {
      product: {
        userName: "Eve Black",
        date: new Date('2023-01-07'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering garden tools services in gardening. Specializing in garden tools gardening services. Contact for more details.",
        contactNumber: "3334445555",
        price: 700,
        category: {
          id: 7,
          mainCategory: "Gardening",
          subCategories: {
            categoryList: [
              {subId: 19, subName: "Landscaping"},
              {subId: 20, subName: "Plant Care"},
              {subId: 21, subName: "Garden Tools"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Frank Green",
        date: new Date('2023-01-08'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering software installation services in IT support. Specializing in software installation IT support services. Contact for more details.",
        contactNumber: "6667778888",
        price: 800,
        category: {
          id: 8,
          mainCategory: "IT Support",
          subCategories: {
            categoryList: [
              {subId: 22, subName: "Hardware Troubleshooting"},
              {subId: 23, subName: "Software Installation"},
              {subId: 24, subName: "Network Setup"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Grace King",
        date: new Date('2023-01-09'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering commercial cleaning services in cleaning services. Specializing in commercial cleaning cleaning services. Contact for more details.",
        contactNumber: "9990001111",
        price: 900,
        category: {
          id: 9,
          mainCategory: "Cleaning Services",
          subCategories: {
            categoryList: [
              {subId: 25, subName: "Residential Cleaning"},
              {subId: 26, subName: "Commercial Cleaning"},
              {subId: 27, subName: "Specialized Cleaning"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    },
    {
      product: {
        userName: "Hank White",
        date: new Date('2023-01-10'),
        images: {urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]},
        description: "Offering tire services services in automotive. Specializing in tire services automotive services. Contact for more details.",
        contactNumber: "2223334444",
        price: 1000,
        category: {
          id: 10,
          mainCategory: "Automotive",
          subCategories: {
            categoryList: [
              {subId: 28, subName: "Engine Repair"},
              {subId: 29, subName: "Body Work"},
              {subId: 30, subName: "Tire Services"}
            ]
          }
        },
        title: 'Electrical Services - Specializing in Wiring Services for Residential and Commercial Properties'
      },
      imagesList: { urls: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },

    }
  ];

}
