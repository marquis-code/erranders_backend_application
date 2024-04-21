import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../authentication/schema/user.schema";
import mongoose from "mongoose";

@Schema({
  timestamps: true,
})
class CategoryDTO {
  name: string;
}

export class Product {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  price: number;

  @Prop()
  imageUrl?: string;

  @Prop()
  stock: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: User;

  @Prop()
  categories: CategoryDTO[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);