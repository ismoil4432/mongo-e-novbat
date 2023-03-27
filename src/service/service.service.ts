import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Service, ServiceDocument } from './schemas/service.schema';
import { Model } from 'mongoose';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const createdService = await this.serviceModel.create(createServiceDto);
    return createdService;
  }

  async findAll(): Promise<Service[]> {
    return this.serviceModel.find();
  }

  async findById(id: string) {
    return this.serviceModel.findById(id);
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return this.serviceModel.findByIdAndUpdate(id, updateServiceDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.serviceModel.findByIdAndDelete(id);
  }
}
