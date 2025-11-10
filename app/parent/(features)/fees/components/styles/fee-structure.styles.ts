export const feeStructureStyles = {
  container: 'flex items-end gap-6',
  mainSection: 'border border-custom-grey/20 rounded-lg p-4 sm:p-6 max-w-[840px]',
  header: {
    container: 'mb-6',
    gradeContainer: 'flex justify-between items-end gap-4 mb-6',
    gradeSection: 'space-y-2 max-w-[400px]',
    title: 'text-base font-semibold text-foreground',
  },
  select: {
    container: 'relative',
    input: 'w-full border border-secondary rounded-lg py-2 px-4 pr-10 text-sm text-foreground appearance-none focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-white',
    icon: {
      container: 'absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none',
      svg: 'w-4 h-4 text-gray-400'
    }
  },
  table: {
    container: 'border-2 border-custom-grey/20 rounded overflow-x-auto mb-6',
    base: 'w-full border-collapse min-w-[680px]',
    header: 'py-2 px-4 text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50',
    cell: 'py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20'
  },
  terms: {
    container: 'space-y-4',
    title: 'text-base font-bold text-foreground',
    list: 'space-y-2',
    text: 'text-sm text-foreground',
    bankAccounts: 'pl-6 space-y-2 mt-2',
    bankName: 'font-semibold',
    accountNumber: 'ml-8'
  }
} as const
