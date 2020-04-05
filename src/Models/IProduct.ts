import { IReview } from './IReview';
import { ISale } from './ISale';

export interface IProduct {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: IReview[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: ISale[];
}