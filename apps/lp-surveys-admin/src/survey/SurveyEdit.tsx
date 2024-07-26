import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AlcoholConsumptionSurveyTitle } from "../alcoholConsumptionSurvey/AlcoholConsumptionSurveyTitle";
import { UserTitle } from "../user/UserTitle";
import { OutletSurveyTitle } from "../outletSurvey/OutletSurveyTitle";
import { PoliceStationTitle } from "../policeStation/PoliceStationTitle";

export const SurveyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="completedAt" source="completedAt" />
        <TextInput label="type" source="typeField" />
        <ReferenceArrayInput
          source="alcoholConsumptionSurveys"
          reference="AlcoholConsumptionSurvey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlcoholConsumptionSurveyTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="outletSurveys"
          reference="OutletSurvey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutletSurveyTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="policeStation.id"
          reference="PoliceStation"
          label="policeStation"
        >
          <SelectInput optionText={PoliceStationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
