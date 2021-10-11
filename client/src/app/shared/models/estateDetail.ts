import { EstatePhoto } from './estatePhoto';

export interface IEstateDetail {
  id: number;
  estateBedroom: number;
  estateBathroom: number;
  garage: number;
  garageSize: number;
  yearBuilt: string;
  areaSize: number;
  description: string;
  dateAdded: string;
  estateType: string;
  estateCategory: string;
  imageUrl: string;
  price: number;
  monthlyPrice: number;
  secondPrice: number;
  street: string;
  city: string;
  province: string;
  zipCode: string;
  agentFullName: string;
  agentDescription: string;
  agentImageUrl: string;
  agentTitle: string;
  estatePhotos?: EstatePhoto[];
  estateFeatures?: EstateFeature[];
}

export interface EstateFeature {
  id: number;
  name: string;
}

