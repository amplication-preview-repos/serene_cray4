import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PermissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
      </SimpleForm>
    </Edit>
  );
};
