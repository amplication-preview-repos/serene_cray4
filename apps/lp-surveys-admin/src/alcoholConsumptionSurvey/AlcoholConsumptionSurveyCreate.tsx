import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SurveyTitle } from "../survey/SurveyTitle";

export const AlcoholConsumptionSurveyCreate = (
  props: CreateProps
): React.ReactElement => {
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
        <TextInput label="Q13" source="q13" />
        <TextInput label="Q14" source="q14" />
        <TextInput label="Q15" source="q15" />
        <TextInput label="Q16" source="q16" />
        <TextInput label="Q17" source="q17" />
        <TextInput label="Q18" source="q18" />
        <TextInput label="Q19" source="q19" />
        <TextInput label="Q20" source="q20" />
        <TextInput label="Q21" source="q21" />
        <TextInput label="Q22" source="q22" />
        <TextInput label="Q23" source="q23" />
        <TextInput label="Q24" source="q24" />
        <TextInput label="Q25" source="q25" />
        <ReferenceInput source="survey.id" reference="Survey" label="survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
