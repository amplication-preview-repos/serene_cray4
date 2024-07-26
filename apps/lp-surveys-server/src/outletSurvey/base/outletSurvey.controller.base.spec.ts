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
import { OutletSurveyController } from "../outletSurvey.controller";
import { OutletSurveyService } from "../outletSurvey.service";

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
  yesCount: 42,
  noCount: 42,
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
  yesCount: 42,
  noCount: 42,
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
    yesCount: 42,
    noCount: 42,
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
  yesCount: 42,
  noCount: 42,
};

const service = {
  createOutletSurvey() {
    return CREATE_RESULT;
  },
  outletSurveys: () => FIND_MANY_RESULT,
  outletSurvey: ({ where }: { where: { id: string } }) => {
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

describe("OutletSurvey", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OutletSurveyService,
          useValue: service,
        },
      ],
      controllers: [OutletSurveyController],
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

  test("POST /outletSurveys", async () => {
    await request(app.getHttpServer())
      .post("/outletSurveys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /outletSurveys", async () => {
    await request(app.getHttpServer())
      .get("/outletSurveys")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /outletSurveys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/outletSurveys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /outletSurveys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/outletSurveys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /outletSurveys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/outletSurveys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/outletSurveys")
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
