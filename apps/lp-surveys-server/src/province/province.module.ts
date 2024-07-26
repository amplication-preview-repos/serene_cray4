import { Module } from "@nestjs/common";
import { ProvinceModuleBase } from "./base/province.module.base";
import { ProvinceService } from "./province.service";
import { ProvinceController } from "./province.controller";
import { ProvinceResolver } from "./province.resolver";

@Module({
  imports: [ProvinceModuleBase],
  controllers: [ProvinceController],
  providers: [ProvinceService, ProvinceResolver],
  exports: [ProvinceService],
})
export class ProvinceModule {}
