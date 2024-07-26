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
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const AlcoholConsumptionSurveyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AlcoholConsumptionSurveys"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Q13" source="q13" />
        <TextField label="Q14" source="q14" />
        <TextField label="Q15" source="q15" />
        <TextField label="Q16" source="q16" />
        <TextField label="Q17" source="q17" />
        <TextField label="Q18" source="q18" />
        <TextField label="Q19" source="q19" />
        <TextField label="Q20" source="q20" />
        <TextField label="Q21" source="q21" />
        <TextField label="Q22" source="q22" />
        <TextField label="Q23" source="q23" />
        <TextField label="Q24" source="q24" />
        <TextField label="Q25" source="q25" />
        <ReferenceField label="survey" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
