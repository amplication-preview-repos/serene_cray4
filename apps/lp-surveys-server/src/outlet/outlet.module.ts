import { Module } from "@nestjs/common";
import { OutletModuleBase } from "./base/outlet.module.base";
import { OutletService } from "./outlet.service";
import { OutletController } from "./outlet.controller";
import { OutletResolver } from "./outlet.resolver";

@Module({
  imports: [OutletModuleBase],
  controllers: [OutletController],
  providers: [OutletService, OutletResolver],
  exports: [OutletService],
})
export class OutletModule {}
