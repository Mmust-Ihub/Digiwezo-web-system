import { Tab } from "@school-admin/(features)/students/types/interface";
import { ArrowLeftRight, Search, UserRoundPlus } from "lucide-react";
import { SearchType } from "@school-admin/(features)/students/types/enum";


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
