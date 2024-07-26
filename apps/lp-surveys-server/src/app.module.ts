import { Module } from "@nestjs/common";
import { PoliceStationModule } from "./policeStation/policeStation.module";
import { OutletModule } from "./outlet/outlet.module";
import { OutletSurveyModule } from "./outletSurvey/outletSurvey.module";
import { ProvinceModule } from "./province/province.module";
import { SurveyModule } from "./survey/survey.module";
import { AlcoholConsumptionSurveyModule } from "./alcoholConsumptionSurvey/alcoholConsumptionSurvey.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PoliceStationModule,
    OutletModule,
    OutletSurveyModule,
    ProvinceModule,
    SurveyModule,
    AlcoholConsumptionSurveyModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
