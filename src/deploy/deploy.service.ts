import { Injectable } from '@nestjs/common';
import { CreateDeployDto } from './dto/create-deploy.dto';
import { UpdateDeployDto } from './dto/update-deploy.dto';

@Injectable()
export class DeployService {
  create(createDeployDto: CreateDeployDto) {
    return 'This action adds a new deploy';
  }

  findAll() {
    return `This action returns all deploy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deploy`;
  }

  update(id: number, updateDeployDto: UpdateDeployDto) {
    return `This action updates a #${id} deploy`;
  }

  remove(id: number) {
    return `This action removes a #${id} deploy`;
  }
}
