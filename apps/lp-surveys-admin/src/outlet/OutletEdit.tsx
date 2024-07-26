import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProvinceTitle } from "../province/ProvinceTitle";
import { OutletSurveyTitle } from "../outletSurvey/OutletSurveyTitle";

export const OutletEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};
