/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OutletSurveyWhereUniqueInput } from "../../outletSurvey/base/OutletSurveyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OutletSurveyCreateNestedManyWithoutPoliceStationsInput {
  @Field(() => [OutletSurveyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OutletSurveyWhereUniqueInput],
  })
  connect?: Array<OutletSurveyWhereUniqueInput>;
}

export { OutletSurveyCreateNestedManyWithoutPoliceStationsInput as OutletSurveyCreateNestedManyWithoutPoliceStationsInput };
