import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AlcoholConsumptionSurveyController } from "../alcoholConsumptionSurvey.controller";
import { AlcoholConsumptionSurveyService } from "../alcoholConsumptionSurvey.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  q1: "exampleQ1",
  q2: "exampleQ2",
  q3: "exampleQ3",
  q4: "exampleQ4",
  q5: "exampleQ5",
  q6: "exampleQ6",
  q7: "exampleQ7",
  q8: "exampleQ8",
  q9: "exampleQ9",
  q10: "exampleQ10",
  q11: "exampleQ11",
  q12: "exampleQ12",
  q13: "exampleQ13",
  q14: "exampleQ14",
  q15: "exampleQ15",
  q16: "exampleQ16",
  q17: "exampleQ17",
  q18: "exampleQ18",
  q19: "exampleQ19",
  q20: "exampleQ20",
  q21: "exampleQ21",
  q22: "exampleQ22",
  q23: "exampleQ23",
  q24: "exampleQ24",
  q25: "exampleQ25",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  q1: "exampleQ1",
  q2: "exampleQ2",
  q3: "exampleQ3",
  q4: "exampleQ4",
  q5: "exampleQ5",
  q6: "exampleQ6",
  q7: "exampleQ7",
  q8: "exampleQ8",
  q9: "exampleQ9",
  q10: "exampleQ10",
  q11: "exampleQ11",
  q12: "exampleQ12",
  q13: "exampleQ13",
  q14: "exampleQ14",
  q15: "exampleQ15",
  q16: "exampleQ16",
  q17: "exampleQ17",
  q18: "exampleQ18",
  q19: "exampleQ19",
  q20: "exampleQ20",
  q21: "exampleQ21",
  q22: "exampleQ22",
  q23: "exampleQ23",
  q24: "exampleQ24",
  q25: "exampleQ25",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    q1: "exampleQ1",
    q2: "exampleQ2",
    q3: "exampleQ3",
    q4: "exampleQ4",
    q5: "exampleQ5",
    q6: "exampleQ6",
    q7: "exampleQ7",
    q8: "exampleQ8",
    q9: "exampleQ9",
    q10: "exampleQ10",
    q11: "exampleQ11",
    q12: "exampleQ12",
    q13: "exampleQ13",
    q14: "exampleQ14",
    q15: "exampleQ15",
    q16: "exampleQ16",
    q17: "exampleQ17",
    q18: "exampleQ18",
    q19: "exampleQ19",
    q20: "exampleQ20",
    q21: "exampleQ21",
    q22: "exampleQ22",
    q23: "exampleQ23",
    q24: "exampleQ24",
    q25: "exampleQ25",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  q1: "exampleQ1",
  q2: "exampleQ2",
  q3: "exampleQ3",
  q4: "exampleQ4",
  q5: "exampleQ5",
  q6: "exampleQ6",
  q7: "exampleQ7",
  q8: "exampleQ8",
  q9: "exampleQ9",
  q10: "exampleQ10",
  q11: "exampleQ11",
  q12: "exampleQ12",
  q13: "exampleQ13",
  q14: "exampleQ14",
  q15: "exampleQ15",
  q16: "exampleQ16",
  q17: "exampleQ17",
  q18: "exampleQ18",
  q19: "exampleQ19",
  q20: "exampleQ20",
  q21: "exampleQ21",
  q22: "exampleQ22",
  q23: "exampleQ23",
  q24: "exampleQ24",
  q25: "exampleQ25",
};

const service = {
  createAlcoholConsumptionSurvey() {
    return CREATE_RESULT;
  },
  alcoholConsumptionSurveys: () => FIND_MANY_RESULT,
  alcoholConsumptionSurvey: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AlcoholConsumptionSurvey", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AlcoholConsumptionSurveyService,
          useValue: service,
        },
      ],
      controllers: [AlcoholConsumptionSurveyController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /alcoholConsumptionSurveys", async () => {
    await request(app.getHttpServer())
      .post("/alcoholConsumptionSurveys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /alcoholConsumptionSurveys", async () => {
    await request(app.getHttpServer())
      .get("/alcoholConsumptionSurveys")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /alcoholConsumptionSurveys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/alcoholConsumptionSurveys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /alcoholConsumptionSurveys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/alcoholConsumptionSurveys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /alcoholConsumptionSurveys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/alcoholConsumptionSurveys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/alcoholConsumptionSurveys")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
