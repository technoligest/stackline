import { Container } from "inversify";
import "reflect-metadata";
import { IProductService } from '../Services/ProductService/IProductService';
import { ProductService } from '../Services/ProductService/ProductService';
import { TYPES } from './types';

const myContainer = new Container();

function bindServices(): void {
  myContainer.bind<IProductService>(TYPES.PRODUCT_SERVICE).to(ProductService).inSingletonScope();
}

bindServices();

export { myContainer };