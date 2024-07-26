import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoliceStationServiceBase } from "./base/policeStation.service.base";

@Injectable()
export class PoliceStationService extends PoliceStationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
