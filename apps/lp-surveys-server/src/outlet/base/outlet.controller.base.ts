/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OutletService } from "../outlet.service";
import { OutletCreateInput } from "./OutletCreateInput";
import { Outlet } from "./Outlet";
import { OutletFindManyArgs } from "./OutletFindManyArgs";
import { OutletWhereUniqueInput } from "./OutletWhereUniqueInput";
import { OutletUpdateInput } from "./OutletUpdateInput";
import { OutletSurveyFindManyArgs } from "../../outletSurvey/base/OutletSurveyFindManyArgs";
import { OutletSurvey } from "../../outletSurvey/base/OutletSurvey";
import { OutletSurveyWhereUniqueInput } from "../../outletSurvey/base/OutletSurveyWhereUniqueInput";

export class OutletControllerBase {
  constructor(protected readonly service: OutletService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Outlet })
  async createOutlet(@common.Body() data: OutletCreateInput): Promise<Outlet> {
    return await this.service.createOutlet({
      data: {
        ...data,

        province: data.province
          ? {
              connect: data.province,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,

        province: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Outlet] })
  @ApiNestedQuery(OutletFindManyArgs)
  async outlets(@common.Req() request: Request): Promise<Outlet[]> {
    const args = plainToClass(OutletFindManyArgs, request.query);
    return this.service.outlets({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,

        province: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Outlet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async outlet(
    @common.Param() params: OutletWhereUniqueInput
  ): Promise<Outlet | null> {
    const result = await this.service.outlet({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,

        province: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Outlet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOutlet(
    @common.Param() params: OutletWhereUniqueInput,
    @common.Body() data: OutletUpdateInput
  ): Promise<Outlet | null> {
    try {
      return await this.service.updateOutlet({
        where: params,
        data: {
          ...data,

          province: data.province
            ? {
                connect: data.province,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          address: true,

          province: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Outlet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOutlet(
    @common.Param() params: OutletWhereUniqueInput
  ): Promise<Outlet | null> {
    try {
      return await this.service.deleteOutlet({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          address: true,

          province: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/outletSurveys")
  @ApiNestedQuery(OutletSurveyFindManyArgs)
  async findOutletSurveys(
    @common.Req() request: Request,
    @common.Param() params: OutletWhereUniqueInput
  ): Promise<OutletSurvey[]> {
    const query = plainToClass(OutletSurveyFindManyArgs, request.query);
    const results = await this.service.findOutletSurveys(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        q1: true,
        q2: true,
        q3: true,
        q4: true,
        q5: true,
        q6: true,
        q7: true,
        q8: true,
        q9: true,
        q10: true,
        q11: true,
        q12: true,

        survey: {
          select: {
            id: true,
          },
        },

        outlet: {
          select: {
            id: true,
          },
        },

        yesCount: true,
        noCount: true,

        policeStation: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/outletSurveys")
  async connectOutletSurveys(
    @common.Param() params: OutletWhereUniqueInput,
    @common.Body() body: OutletSurveyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      outletSurveys: {
        connect: body,
      },
    };
    await this.service.updateOutlet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/outletSurveys")
  async updateOutletSurveys(
    @common.Param() params: OutletWhereUniqueInput,
    @common.Body() body: OutletSurveyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      outletSurveys: {
        set: body,
      },
    };
    await this.service.updateOutlet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/outletSurveys")
  async disconnectOutletSurveys(
    @common.Param() params: OutletWhereUniqueInput,
    @common.Body() body: OutletSurveyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      outletSurveys: {
        disconnect: body,
      },
    };
    await this.service.updateOutlet({
      where: params,
      data,
      select: { id: true },
    });
  }
}
