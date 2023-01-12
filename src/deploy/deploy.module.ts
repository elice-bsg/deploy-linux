import { Module } from '@nestjs/common';
import { DeployService } from './deploy.service';
import { DeployController } from './deploy.controller';

@Module({
  controllers: [DeployController],
  providers: [DeployService]
})
export class DeployModule {}
