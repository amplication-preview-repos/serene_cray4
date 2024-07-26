import { Module } from "@nestjs/common";
import { OutletSurveyModuleBase } from "./base/outletSurvey.module.base";
import { OutletSurveyService } from "./outletSurvey.service";
import { OutletSurveyController } from "./outletSurvey.controller";
import { OutletSurveyResolver } from "./outletSurvey.resolver";

@Module({
  imports: [OutletSurveyModuleBase],
  controllers: [OutletSurveyController],
  providers: [OutletSurveyService, OutletSurveyResolver],
  exports: [OutletSurveyService],
})
export class OutletSurveyModule {}
