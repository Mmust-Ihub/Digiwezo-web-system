export const searchInputStyles = {
  container: "relative w-[695px]",
  input: "w-full h-[58px] pl-4 pr-12 bg-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
  iconContainer: "absolute right-3 top-1/2 transform -translate-y-1/2",
  icon: "w-5 h-5 text-gray-400"
};

export const managementSectionStyles = {
  container: "space-y-4",
  header: "flex items-center justify-between",
  title: "text-xl font-semibold text-gray-900",
  button: "bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2",
  buttonIcon: "w-4 h-4",
  searchContainer: ""
};

export const statsCardStyles = {
  container: "bg-white rounded-lg shadow-md border-white w-[281px] h-[154px] p-6",
  content: "flex items-start gap-4 h-full",
  iconContainer: "flex-shrink-0 mt-2",
  icon: "w-12 h-12 text-primary",
  textContainer: "flex flex-col justify-center",
  count: "text-4xl font-bold text-gray-900 mb-1",
  label: "text-base text-gray-600 font-medium"
};

export const bomHeaderStyles = {
  container: "space-y-6",
  title: "text-2xl font-semibold text-gray-900",
  statsContainer: "flex gap-6 flex-wrap"
};

export const tableStyles = {
  container: "bg-white rounded-lg shadow-sm overflow-hidden",
  table: "w-full",
  header: "bg-gray-50 border-b",
  headerRow: "",
  headerCell: "px-6 py-4 text-left text-sm font-semibold text-gray-900",
  body: "",
  bodyRow: "border-b border-gray-100 hover:bg-gray-50",
  bodyCell: "px-6 py-4 text-sm text-gray-900",
  indexCell: "px-6 py-4 text-sm text-gray-500 font-medium",
  usernameCell: "px-6 py-4 text-sm text-gray-600",
  actionButton: "bg-primary hover:bg-primary/90 text-white w-[160px] h-[30px] text-xs font-medium rounded flex items-center justify-center",
  verifiedIcon: "w-4 h-4 text-blue-500 ml-2"
};

export const paginationStyles = {
  container: "flex items-center justify-between mt-6",
  navContainer: "flex items-center gap-2",
  navButton: "p-3 bg-white border border-white rounded-full hover:bg-gray-50",
  navIcon: "w-5 h-5 text-primary",
  actionsContainer: "flex items-center gap-3",
  printButton: "bg-secondary hover:bg-secondary/90 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 font-medium",
  downloadButton: "bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium",
  buttonIcon: "w-4 h-4"
};