export interface Category_modal{
  id:number;
  mainCategory:string
  subCategories:SubCategoriesList;
}

export interface SubCategories{
  subId:number;
  subName:string;
}

export interface SubCategoriesList{
  categoryList:Array<SubCategories>
}
