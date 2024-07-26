import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { SurveyTitle } from "../survey/SurveyTitle";
import { OutletTitle } from "../outlet/OutletTitle";
import { PoliceStationTitle } from "../policeStation/PoliceStationTitle";

export const OutletSurveyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Q1" source="q1" />
        <TextInput label="Q2" source="q2" />
        <TextInput label="Q3" source="q3" />
        <TextInput label="Q4" source="q4" />
        <TextInput label="Q5" source="q5" />
        <TextInput label="Q6" source="q6" />
        <TextInput label="Q7" source="q7" />
        <TextInput label="Q8" source="q8" />
        <TextInput label="Q9" source="q9" />
        <TextInput label="Q10" source="q10" />
        <TextInput label="Q11" source="q11" />
        <TextInput label="Q12" source="q12" />
        <ReferenceInput source="survey.id" reference="Survey" label="survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
        <ReferenceInput source="outlet.id" reference="Outlet" label="outlet">
          <SelectInput optionText={OutletTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="yesCount" source="yesCount" />
        <NumberInput step={1} label="noCount" source="noCount" />
        <ReferenceInput
          source="policeStation.id"
          reference="PoliceStation"
          label="policeStation"
        >
          <SelectInput optionText={PoliceStationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
