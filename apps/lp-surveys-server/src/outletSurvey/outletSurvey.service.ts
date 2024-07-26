import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutletSurveyServiceBase } from "./base/outletSurvey.service.base";

@Injectable()
export class OutletSurveyService extends OutletSurveyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
