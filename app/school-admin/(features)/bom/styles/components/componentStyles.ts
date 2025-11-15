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
  statsContainer: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center"
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
  navButton: "p-3 bg-white border border-white rounded-full hover:bg-gray-50 cursor-pointer disabled:cursor-default disabled:opacity-50",
  navIcon: "w-5 h-5 text-primary",
  actionsContainer: "flex items-center gap-3",
  printButton: "bg-secondary hover:bg-secondary/90 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed",
  downloadButton: "bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed",
  buttonIcon: "w-4 h-4",
  loadingSpinner: "w-4 h-4 animate-spin border-2 border-current border-t-transparent rounded-full"
};

export const modalStyles = {
  overlay: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in-0 duration-300",
  container: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300",
  header: "p-6 border-b border-gray-200 bg-gray-50/50",
  title: "text-xl font-semibold text-gray-900",
  closeButton: "absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors",
  closeIcon: "w-5 h-5 text-gray-500",
  content: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
  form: "space-y-6",
  formRow: "grid grid-cols-1 md:grid-cols-2 gap-4",
  formGroup: "space-y-2",
  label: "block text-sm font-medium text-gray-700",
  input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white",
  select: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white transition-colors",
  textarea: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none bg-white transition-colors",
  footer: "p-6 border-t border-gray-200 flex justify-between bg-gray-50/30",
  backButton: "px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium",
  submitButton: "bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl",
  submitIcon: "w-4 h-4"
};

