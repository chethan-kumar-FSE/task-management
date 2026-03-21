import { getToday } from "../../utils/date";
import { PRIORITY } from "../constants/constant";

export const taskFields = [
  {
    id: "title-id",
    fieldType: "textField",
    name: "title",
    label: "Title",
    placeholder: "Enter title name",
    validate: {
      minLength: 3,
      isRequired: true,
    },
  },
  {
    id: "description-id",
    fieldType: "textField",
    name: "description",
    label: "Description",
    placeholder: "Enter description ",
    validate: {
      minLength: 10,
      isRequired: true,
    },
  },
  {
    id: "priority-id",
    fieldType: "selectField",
    name: "priority",
    label: "Priority",
    placeholder: "Select Priority",
    options: [
      {
        label: "Low",
        value: PRIORITY.LOW,
      },
      {
        label: "Medium",
        value: PRIORITY.MEDIUM,
      },
      {
        label: "High",
        value: PRIORITY.HIGH,
      },
    ],
    validate: {
      isRequired: true,
    },
  },
  {
    id: "date-id",
    fieldType: "date",
    name: "date",
    label: "date",
    minDate: getToday(),
    validate: {
      isRequired: true,
    },
  },
];
