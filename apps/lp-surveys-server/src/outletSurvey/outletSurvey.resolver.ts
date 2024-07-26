import * as graphql from "@nestjs/graphql";
import { OutletSurveyResolverBase } from "./base/outletSurvey.resolver.base";
import { OutletSurvey } from "./base/OutletSurvey";
import { OutletSurveyService } from "./outletSurvey.service";

@graphql.Resolver(() => OutletSurvey)
export class OutletSurveyResolver extends OutletSurveyResolverBase {
  constructor(protected readonly service: OutletSurveyService) {
    super(service);
  }
}
