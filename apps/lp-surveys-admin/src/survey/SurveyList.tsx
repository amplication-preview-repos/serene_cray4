import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { POLICESTATION_TITLE_FIELD } from "../policeStation/PoliceStationTitle";

export const SurveyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Surveys"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
