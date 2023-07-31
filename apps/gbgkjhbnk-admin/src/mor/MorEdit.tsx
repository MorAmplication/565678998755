import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  PasswordInput,
  TextInput,
  SelectArrayInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const MorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <PasswordInput label="Password" source="password" />
        <TextInput label="Username" source="username" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
