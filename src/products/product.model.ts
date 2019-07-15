import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  price: { type: Number, required: true},
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
}

// // or
// export class Product {
//     public id: string;
//     public title: string;
//     public description: string;
//     public price: number;
//   constructor(
//     id: string,
//     title: string,
//     description: string,
//     price: number,
//   ) {
//       this.id = id;
//       this.title = title;
//       this.description = description;
//       this.price = price;
//   }
// }
