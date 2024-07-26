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
import { PROVINCE_TITLE_FIELD } from "../province/ProvinceTitle";

export const PoliceStationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PoliceStations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
