import * as graphql from "@nestjs/graphql";
import { ProvinceResolverBase } from "./base/province.resolver.base";
import { Province } from "./base/Province";
import { ProvinceService } from "./province.service";

@graphql.Resolver(() => Province)
export class ProvinceResolver extends ProvinceResolverBase {
  constructor(protected readonly service: ProvinceService) {
    super(service);
  }
}
