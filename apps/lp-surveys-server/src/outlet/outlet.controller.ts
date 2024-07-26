import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutletService } from "./outlet.service";
import { OutletControllerBase } from "./base/outlet.controller.base";

@swagger.ApiTags("outlets")
@common.Controller("outlets")
export class OutletController extends OutletControllerBase {
  constructor(protected readonly service: OutletService) {
    super(service);
  }
}
