import * as graphql from "@nestjs/graphql";
import { AlcoholConsumptionSurveyResolverBase } from "./base/alcoholConsumptionSurvey.resolver.base";
import { AlcoholConsumptionSurvey } from "./base/AlcoholConsumptionSurvey";
import { AlcoholConsumptionSurveyService } from "./alcoholConsumptionSurvey.service";

@graphql.Resolver(() => AlcoholConsumptionSurvey)
export class AlcoholConsumptionSurveyResolver extends AlcoholConsumptionSurveyResolverBase {
  constructor(protected readonly service: AlcoholConsumptionSurveyService) {
    super(service);
  }
}
