export interface IRelationshipEntity {
    id: string;
    type: string;
}

export interface IRelationship {
  data: IRelationshipEntity | IRelationshipEntity[];
}

export interface IStore {
  establishmentDate: string;
  name: string;
  rating: number;
  storeImage: string;
  website: string;
  books?: IBook[];
  countries?: ICountry;
}

export interface IBook {
  copiesSold: number;
  name: string;
  authors?: IAuthor;
}

export interface ICountry {
  code: string;
}

export interface IAuthor {
  fullName: string;
}
 
export interface IItem {
  attributes: IStore & IBook & ICountry & IAuthor;
  id: string;
  type: string;
  relationships: { [key: string]: IRelationship };
}

export interface IStoresResponse {
  data: IItem[];
  included: IItem[];
  jsonapi: { version: string };
  meta: { total: string };
}