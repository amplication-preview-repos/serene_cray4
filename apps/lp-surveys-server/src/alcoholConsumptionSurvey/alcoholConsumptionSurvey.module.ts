import { Module } from "@nestjs/common";
import { AlcoholConsumptionSurveyModuleBase } from "./base/alcoholConsumptionSurvey.module.base";
import { AlcoholConsumptionSurveyService } from "./alcoholConsumptionSurvey.service";
import { AlcoholConsumptionSurveyController } from "./alcoholConsumptionSurvey.controller";
import { AlcoholConsumptionSurveyResolver } from "./alcoholConsumptionSurvey.resolver";

@Module({
  imports: [AlcoholConsumptionSurveyModuleBase],
  controllers: [AlcoholConsumptionSurveyController],
  providers: [
    AlcoholConsumptionSurveyService,
    AlcoholConsumptionSurveyResolver,
  ],
  exports: [AlcoholConsumptionSurveyService],
})
export class AlcoholConsumptionSurveyModule {}
