import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OfferDocument = Offers & Document;

@Schema({ timestamps: true })
export class Offers {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string; 

  @Prop({ required: true })
  slayer: string;

  @Prop({ type: [String], required: true })
competences: string[];




  @Prop({ required: true })
  creator: string; 
}

export const OfferSchema = SchemaFactory.createForClass(Offers);
