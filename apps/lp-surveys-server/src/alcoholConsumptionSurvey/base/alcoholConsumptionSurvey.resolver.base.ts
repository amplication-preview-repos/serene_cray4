/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AlcoholConsumptionSurvey } from "./AlcoholConsumptionSurvey";
import { AlcoholConsumptionSurveyCountArgs } from "./AlcoholConsumptionSurveyCountArgs";
import { AlcoholConsumptionSurveyFindManyArgs } from "./AlcoholConsumptionSurveyFindManyArgs";
import { AlcoholConsumptionSurveyFindUniqueArgs } from "./AlcoholConsumptionSurveyFindUniqueArgs";
import { CreateAlcoholConsumptionSurveyArgs } from "./CreateAlcoholConsumptionSurveyArgs";
import { UpdateAlcoholConsumptionSurveyArgs } from "./UpdateAlcoholConsumptionSurveyArgs";
import { DeleteAlcoholConsumptionSurveyArgs } from "./DeleteAlcoholConsumptionSurveyArgs";
import { Survey } from "../../survey/base/Survey";
import { AlcoholConsumptionSurveyService } from "../alcoholConsumptionSurvey.service";
@graphql.Resolver(() => AlcoholConsumptionSurvey)
export class AlcoholConsumptionSurveyResolverBase {
  constructor(protected readonly service: AlcoholConsumptionSurveyService) {}

  async _alcoholConsumptionSurveysMeta(
    @graphql.Args() args: AlcoholConsumptionSurveyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AlcoholConsumptionSurvey])
  async alcoholConsumptionSurveys(
    @graphql.Args() args: AlcoholConsumptionSurveyFindManyArgs
  ): Promise<AlcoholConsumptionSurvey[]> {
    return this.service.alcoholConsumptionSurveys(args);
  }

  @graphql.Query(() => AlcoholConsumptionSurvey, { nullable: true })
  async alcoholConsumptionSurvey(
    @graphql.Args() args: AlcoholConsumptionSurveyFindUniqueArgs
  ): Promise<AlcoholConsumptionSurvey | null> {
    const result = await this.service.alcoholConsumptionSurvey(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AlcoholConsumptionSurvey)
  async createAlcoholConsumptionSurvey(
    @graphql.Args() args: CreateAlcoholConsumptionSurveyArgs
  ): Promise<AlcoholConsumptionSurvey> {
    return await this.service.createAlcoholConsumptionSurvey({
      ...args,
      data: {
        ...args.data,

        survey: args.data.survey
          ? {
              connect: args.data.survey,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => AlcoholConsumptionSurvey)
  async updateAlcoholConsumptionSurvey(
    @graphql.Args() args: UpdateAlcoholConsumptionSurveyArgs
  ): Promise<AlcoholConsumptionSurvey | null> {
    try {
      return await this.service.updateAlcoholConsumptionSurvey({
        ...args,
        data: {
          ...args.data,

          survey: args.data.survey
            ? {
                connect: args.data.survey,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AlcoholConsumptionSurvey)
  async deleteAlcoholConsumptionSurvey(
    @graphql.Args() args: DeleteAlcoholConsumptionSurveyArgs
  ): Promise<AlcoholConsumptionSurvey | null> {
    try {
      return await this.service.deleteAlcoholConsumptionSurvey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Survey, {
    nullable: true,
    name: "survey",
  })
  async getSurvey(
    @graphql.Parent() parent: AlcoholConsumptionSurvey
  ): Promise<Survey | null> {
    const result = await this.service.getSurvey(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
