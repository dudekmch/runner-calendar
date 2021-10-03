import { CheckBoxType } from "../../common/checkbox/CheckBoxModel";

export interface IFilterFormProps {
    checkBoxType: CheckBoxType,
    distinctIntervalTypes: Set<string>
}