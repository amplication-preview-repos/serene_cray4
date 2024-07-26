import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoliceStationService } from "./policeStation.service";
import { PoliceStationControllerBase } from "./base/policeStation.controller.base";

@swagger.ApiTags("policeStations")
@common.Controller("policeStations")
export class PoliceStationController extends PoliceStationControllerBase {
  constructor(protected readonly service: PoliceStationService) {
    super(service);
  }
}
