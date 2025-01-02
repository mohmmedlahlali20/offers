import { Injectable } from "@nestjs/common";
import { UpdateOfferDto } from "./dto/update-offer.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OfferDocument, Offers } from "./schema/offers.schema";
import { CreateOfferDto } from "./dto/create-offer.dto";

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offers.name) private offerModel: Model<OfferDocument>
  ) { }

  async createOffer(createOfferDto: CreateOfferDto): Promise<Offers> {
    const offer = new this.offerModel(createOfferDto);
    return offer.save();
  }

  async getAllOffers(): Promise<Offers[]> {
    try {
      const offers = await this.offerModel.
        find().

        exec();
        if (offers.length === 0) {
          console.log("No offers found");
          return [];
        }
        return offers
    } catch (error) {
      throw new Error(`Error fetching offers: ${error.message}`);
    }
  }

  async getOfferById(id: string): Promise<Offers> {
    try {
      const offer = await this.offerModel
        .findById(id)
        .exec();
      if (!offer) {
        throw new Error('Offer not found');
      }
      return offer;
    } catch (error) {
      throw new Error(`Error fetching offer by ID: ${error.message}`);
    }
  }
  

  async updateOffer(
    id: string,
    updateOfferDto: UpdateOfferDto
  ): Promise<Offers> {
    return this.offerModel
      .findByIdAndUpdate(id, updateOfferDto, { new: true })
      .exec();
  }

  async searching(query: string): Promise<Offers[]> {
    try {
      return await this.offerModel
        .find({
          $or: [{ title: { $regex: query, $options: "i" } }],
        })
        .exec();
    } catch (error) {
      throw new Error(`Error searching offers: ${error.message}`);
    }
  }
}
