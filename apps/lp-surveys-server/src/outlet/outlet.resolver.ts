import * as graphql from "@nestjs/graphql";
import { OutletResolverBase } from "./base/outlet.resolver.base";
import { Outlet } from "./base/Outlet";
import { OutletService } from "./outlet.service";

@graphql.Resolver(() => Outlet)
export class OutletResolver extends OutletResolverBase {
  constructor(protected readonly service: OutletService) {
    super(service);
  }
}
