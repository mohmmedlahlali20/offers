import { Injectable } from '@nestjs/common';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OfferDocument, Offers } from './schema/offers.schema';
import { CreateOfferDto } from './dto/create-offer.dto';

@Injectable()
export class OffersService {
  constructor(@InjectModel(Offers.name) private offerModel: Model<OfferDocument>) {}

  async createOffer(createOfferDto: CreateOfferDto): Promise<Offers> {
    const offer = new this.offerModel(createOfferDto);
    return offer.save();
  }

  async getAllOffers(): Promise<Offers[]> {
    return this.offerModel.find().exec();
  }

  async getOfferById(id: string): Promise<Offers> {
    return this.offerModel.findById(id).exec();
  }

  async updateOffer(id: string, updateOfferDto: UpdateOfferDto): Promise<Offers> {
    return this.offerModel.findByIdAndUpdate(id, updateOfferDto, { new: true }).exec();
  }
}
