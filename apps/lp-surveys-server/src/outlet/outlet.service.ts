import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutletServiceBase } from "./base/outlet.service.base";

@Injectable()
export class OutletService extends OutletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
