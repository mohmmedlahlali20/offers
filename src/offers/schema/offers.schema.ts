import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type OfferDocument = Offers & Document;

@Schema({ timestamps: true })
export class Offers {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  salary: number;

  @Prop({ type: [String], required: true })
  competences: string[];

  @Prop({required: true  })
  contract: string

  @Prop({required: true})
  localisation: string

  @Prop({required: true})
  companyName: string

  @Prop({ default: 'open' })
  status: string;

  @Prop({ type: String })
  contactEmail: string;

  @Prop({ type: String })
  contactPhone?: string

  @Prop({ type: Types.ObjectId, ref: "User" })
  RH: Types.ObjectId;


  


}

export const OfferSchema = SchemaFactory.createForClass(Offers);
