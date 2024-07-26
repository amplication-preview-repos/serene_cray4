import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProvinceTitle } from "../province/ProvinceTitle";
import { OutletSurveyTitle } from "../outletSurvey/OutletSurveyTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const PoliceStationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" source="address" />
        <ReferenceInput
          source="province.id"
          reference="Province"
          label="province"
        >
          <SelectInput optionText={ProvinceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="outletSurveys"
          reference="OutletSurvey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutletSurveyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="surveys"
          reference="Survey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SurveyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
