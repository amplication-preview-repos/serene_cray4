import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlcoholConsumptionSurveyServiceBase } from "./base/alcoholConsumptionSurvey.service.base";

@Injectable()
export class AlcoholConsumptionSurveyService extends AlcoholConsumptionSurveyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
