import { Module } from "@nestjs/common";
import { PoliceStationModuleBase } from "./base/policeStation.module.base";
import { PoliceStationService } from "./policeStation.service";
import { PoliceStationController } from "./policeStation.controller";
import { PoliceStationResolver } from "./policeStation.resolver";

@Module({
  imports: [PoliceStationModuleBase],
  controllers: [PoliceStationController],
  providers: [PoliceStationService, PoliceStationResolver],
  exports: [PoliceStationService],
})
export class PoliceStationModule {}
