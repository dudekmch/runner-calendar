import { Form } from "react-bootstrap";
import { ICheckBoxProps } from "./CheckBoxModel";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { v4 as uuidv4 } from "uuid";


const CheckBox = (props: ICheckBoxProps) => {
  let isChecked = false;

  const onCheckBoxChange = () => {
    isChecked = !isChecked
    props.onCheckBoxChange(isChecked, props.checkBoxName);
  };

  return (
      <Form.Check
        inline
        label={props.checkBoxName}
        type={props.type as FormCheckType}
        id={uuidv4()}
        onClick={onCheckBoxChange}
      />
  );
};

export default CheckBox;
