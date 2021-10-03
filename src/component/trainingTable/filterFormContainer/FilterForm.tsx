import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { intervalTypesFilterActions } from "../../../store/index";
import CheckBox from "../../common/checkbox/CheckBox";
import { IFilterFormProps } from "./FilterFormModel";
import { v4 as uuidv4 } from "uuid";

const FilterForm = (props: IFilterFormProps) => {
  const dispatch = useDispatch();

  const onCheckBoxChangeHandler = (isSelected: boolean, name: string) => {
    if (isSelected) {
      dispatch(intervalTypesFilterActions.addFilter(name));
    } else {
      dispatch(intervalTypesFilterActions.removeFilter(name))
    }
  };

  const createCheckBoxes = () => {
    return Array.from(props.distinctIntervalTypes).map((item) => {
      return (
        <CheckBox
          key={uuidv4()}
          type={props.checkBoxType}
          checkBoxName={item}
          onCheckBoxChange={onCheckBoxChangeHandler}
        ></CheckBox>
      );
    });
  };

  return <Form>{createCheckBoxes()}</Form>;
};

export default FilterForm;
