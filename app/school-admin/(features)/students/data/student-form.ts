import { FormFieldConfig } from "@/school-admin/(features)/students/types/interface";
import {
  FORM_OPTIONS,
  STREAM_OPTIONS,
  GENDER_OPTIONS,
  BOARDING_STATUS_OPTIONS,
  RESIDENCE_OPTIONS,
} from "@/school-admin/(features)/students/data/constants";



export const PERSONAL_INFO_FIELDS: FormFieldConfig[] = [
  {
    name: 'admissionNumber',
    label: 'Admission Number',
    type: 'text',
    placeholder: 'Admission Number',
    isRequired: true,
  },
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
    isRequired: true,
  },
  {
    name: 'form',
    label: 'Form',
    type: 'select',
    placeholder: 'Select Form',
    options: FORM_OPTIONS,
    isRequired: true,
  },
  {
    name: 'stream',
    label: 'Stream',
    type: 'select',
    placeholder: 'Select Stream',
    options: STREAM_OPTIONS,
    isRequired: true,
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    placeholder: 'Select Gender...',
    options: GENDER_OPTIONS,
    isRequired: true,
  },
  {
    name: 'boardingStatus',
    label: 'Boarding Status',
    type: 'select',
    placeholder: 'Select boarding status',
    options: BOARDING_STATUS_OPTIONS,
    isRequired: true,
  },
  {
    name: 'primaryPhone',
    label: 'Primary Phone',
    type: 'phone',
    helperText: 'Picked from school settings',
    isRequired: true,
  },
  {
    name: 'secondaryPhone',
    label: 'Secondary Phone',
    type: 'phone',
    isRequired: false,
  },
  {
    name: 'residence',
    label: 'Residence',
    type: 'select',
    placeholder: 'Select Residence',
    options: RESIDENCE_OPTIONS,
    isRequired: false,
  },
  {
    name: 'studentImage',
    label: 'Upload Student Image',
    type: 'file',
    accept: 'image/jpeg,image/jpg,image/png',
    isRequired: false,
  },
];