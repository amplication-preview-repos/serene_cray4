import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";
import { OUTLET_TITLE_FIELD } from "../outlet/OutletTitle";
import { POLICESTATION_TITLE_FIELD } from "./PoliceStationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROVINCE_TITLE_FIELD } from "../province/ProvinceTitle";

export const PoliceStationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="address" source="address" />
        <ReferenceField
          label="province"
          source="province.id"
          reference="Province"
        >
          <TextField source={PROVINCE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="OutletSurvey"
          target="policeStationId"
          label="OutletSurveys"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Q1" source="q1" />
            <TextField label="Q2" source="q2" />
            <TextField label="Q3" source="q3" />
            <TextField label="Q4" source="q4" />
            <TextField label="Q5" source="q5" />
            <TextField label="Q6" source="q6" />
            <TextField label="Q7" source="q7" />
            <TextField label="Q8" source="q8" />
            <TextField label="Q9" source="q9" />
            <TextField label="Q10" source="q10" />
            <TextField label="Q11" source="q11" />
            <TextField label="Q12" source="q12" />
            <ReferenceField
              label="survey"
              source="survey.id"
              reference="Survey"
            >
              <TextField source={SURVEY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="outlet"
              source="outlet.id"
              reference="Outlet"
            >
              <TextField source={OUTLET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="yesCount" source="yesCount" />
            <TextField label="noCount" source="noCount" />
            <ReferenceField
              label="policeStation"
              source="policestation.id"
              reference="PoliceStation"
            >
              <TextField source={POLICESTATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Survey"
          target="policeStationId"
          label="Surveys"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="completedAt" source="completedAt" />
            <TextField label="type" source="typeField" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="policeStation"
              source="policestation.id"
              reference="PoliceStation"
            >
              <TextField source={POLICESTATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
