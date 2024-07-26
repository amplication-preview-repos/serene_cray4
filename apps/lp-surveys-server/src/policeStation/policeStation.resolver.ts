import * as graphql from "@nestjs/graphql";
import { PoliceStationResolverBase } from "./base/policeStation.resolver.base";
import { PoliceStation } from "./base/PoliceStation";
import { PoliceStationService } from "./policeStation.service";

@graphql.Resolver(() => PoliceStation)
export class PoliceStationResolver extends PoliceStationResolverBase {
  constructor(protected readonly service: PoliceStationService) {
    super(service);
  }
}
