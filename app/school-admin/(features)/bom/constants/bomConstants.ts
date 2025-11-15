export const BOM_CONSTANTS = {

  PAGE_TITLE: "Board of Management",
  

  STATS_LABELS: {
    TOTAL_MEMBERS: "Total Members",
    MALE_MEMBERS: "Male",
    FEMALE_MEMBERS: "Female"
  },
  

  FORM_LABELS: {
    FULL_NAME: "Full Name",
    EMAIL_ADDRESS: "Email Address",
    GENDER: "Gender",
    PHONE: "Phone",
    ID_NUMBER: "ID Number",
    ADDRESS: "Address"
  },
  

  BUTTONS: {
    PRINT: "Print",
    PRINTING: "Printing...",
    DOWNLOAD: "Download",
    GENERATING: "Generating...",
    PREVIOUS_PAGE: "Previous page",
    NEXT_PAGE: "Next page",
    VIEW: "View",
    BACK: "Back",
    ADD_MEMBER: "Add Member",
    ADDING: "Adding..."
  },
  
  // Table headers
  TABLE_HEADERS: {
    INDEX: "#",
    NAME: "Name", 
    USERNAME: "Username",
    PHONE: "Phone",
    ACTION: "Action"
  },

  MODAL: {
    ADD_MEMBER_TITLE: "Fill in the details of the member"
  },
  

  ERRORS: {
    TABLE_LOAD_ERROR: "Unable to load members table"
  },
  

  PAGINATION: {
    PAGE_INFO: (current: number, total: number) => `Page ${current} of ${total}`
  }
} as const;
