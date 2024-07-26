import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AlcoholConsumptionSurveyService } from "./alcoholConsumptionSurvey.service";
import { AlcoholConsumptionSurveyControllerBase } from "./base/alcoholConsumptionSurvey.controller.base";

@swagger.ApiTags("alcoholConsumptionSurveys")
@common.Controller("alcoholConsumptionSurveys")
export class AlcoholConsumptionSurveyController extends AlcoholConsumptionSurveyControllerBase {
  constructor(protected readonly service: AlcoholConsumptionSurveyService) {
    super(service);
  }
}
