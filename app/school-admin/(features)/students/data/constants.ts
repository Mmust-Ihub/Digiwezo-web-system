import { Tab } from "@school-admin/(features)/students/types/interface";
import { ArrowLeftRight, Search, UserRoundPlus } from "lucide-react";
<<<<<<< HEAD
import { SearchType, studentAddType } from "@school-admin/(features)/students/types/enum";
=======
import { SearchType } from "@school-admin/(features)/students/types/enum";
>>>>>>> aboutUs


export const tabs: Tab[] = [
  {
    label: "Search",
    value: "/",
    icon: Search,
  },
  {
    label: "Add student",
    value: "/new",
    icon: UserRoundPlus,
  },
  {
    label: "Move Student",
    value: "/move",
    icon: ArrowLeftRight,
  },
];
export const SEARCH_TYPES: { label: string; value: SearchType }[] = [
  { label: "Admission No", value: SearchType.ADMISSION_NO },
  { label: "Name", value: SearchType.NAME },
  { label: "UPI", value: SearchType.UPI },
  { label: "Index No", value: SearchType.INDEX_NO },
];
<<<<<<< HEAD
export const ADD_TYPES: { label: string; value: studentAddType }[] = [
  { label: "Key in student details", value: studentAddType.key },
  { label: "Upload students from a spreadsheet", value: studentAddType.upload },
 
];

// data/student.constants.ts

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export enum BoardingStatus {
  DAY = 'day',
  BOARDING = 'boarding'
}

export enum Form {
  FORM_1 = 'form_1',
  FORM_2 = 'form_2',
  FORM_3 = 'form_3',
  FORM_4 = 'form_4'
}

export enum Stream {
  STREAM_A = 'stream_a',
  STREAM_B = 'stream_b',
  STREAM_C = 'stream_c',
  STREAM_D = 'stream_d'
}

export enum Residence {
  ON_CAMPUS = 'on_campus',
  OFF_CAMPUS = 'off_campus',
  DAY_SCHOLAR = 'day_scholar'
}

export const GENDER_OPTIONS = [
  { label: 'Male', value: Gender.MALE },
  { label: 'Female', value: Gender.FEMALE },
  { label: 'Other', value: Gender.OTHER }
];

export const BOARDING_STATUS_OPTIONS = [
  { label: 'Day Scholar', value: BoardingStatus.DAY },
  { label: 'Boarding', value: BoardingStatus.BOARDING }
];

export const FORM_OPTIONS = [
  { label: 'Form 1', value: Form.FORM_1 },
  { label: 'Form 2', value: Form.FORM_2 },
  { label: 'Form 3', value: Form.FORM_3 },
  { label: 'Form 4', value: Form.FORM_4 }
];

export const STREAM_OPTIONS = [
  { label: 'Stream A', value: Stream.STREAM_A },
  { label: 'Stream B', value: Stream.STREAM_B },
  { label: 'Stream C', value: Stream.STREAM_C },
  { label: 'Stream D', value: Stream.STREAM_D }
];

export const RESIDENCE_OPTIONS = [
  { label: 'On Campus', value: Residence.ON_CAMPUS },
  { label: 'Off Campus', value: Residence.OFF_CAMPUS },
  { label: 'Day Scholar', value: Residence.DAY_SCHOLAR }
]; 
=======
>>>>>>> aboutUs
