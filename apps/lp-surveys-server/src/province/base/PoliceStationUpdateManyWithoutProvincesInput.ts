/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PoliceStationWhereUniqueInput } from "../../policeStation/base/PoliceStationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PoliceStationUpdateManyWithoutProvincesInput {
  @Field(() => [PoliceStationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PoliceStationWhereUniqueInput],
  })
  connect?: Array<PoliceStationWhereUniqueInput>;

  @Field(() => [PoliceStationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PoliceStationWhereUniqueInput],
  })
  disconnect?: Array<PoliceStationWhereUniqueInput>;

  @Field(() => [PoliceStationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PoliceStationWhereUniqueInput],
  })
  set?: Array<PoliceStationWhereUniqueInput>;
}

export { PoliceStationUpdateManyWithoutProvincesInput as PoliceStationUpdateManyWithoutProvincesInput };
