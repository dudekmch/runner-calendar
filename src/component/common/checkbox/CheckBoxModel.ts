export interface ICheckBoxProps {
    type: CheckBoxType;
    checkBoxName: string;
    onCheckBoxChange(isSelected: boolean, name: string): void;
}

export enum CheckBoxType {
    CHECKBOX = 'checkbox',
    RADIO = 'radio'
}