import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutletSurveyService } from "./outletSurvey.service";
import { OutletSurveyControllerBase } from "./base/outletSurvey.controller.base";

@swagger.ApiTags("outletSurveys")
@common.Controller("outletSurveys")
export class OutletSurveyController extends OutletSurveyControllerBase {
  constructor(protected readonly service: OutletSurveyService) {
    super(service);
  }
}
