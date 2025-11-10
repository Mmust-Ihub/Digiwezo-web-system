export const feeStatementStyles = {
  container: 'flex items-end gap-6',
  content: {
    base: 'border border-custom-grey/20 rounded-lg relative p-4 sm:p-6 max-w-[742px]',
    header: {
      container: 'mb-6',
      title: 'text-xl font-semibold text-foreground text-center mb-3',
      infoContainer: 'flex flex-wrap gap-x-8 text-sm justify-end'
    },
    studentInfo: 'space-y-2 mb-6'
  },
  text: {
    base: 'text-sm text-foreground',
    bold: 'font-semibold',
  },
  table: {
    wrapper: 'border border-custom-grey/20 rounded-lg overflow-x-auto',
    base: 'w-full border-collapse min-w-[680px]',
    cell: 'py-2 px-4 text-sm text-foreground border-r border-custom-grey/20',
    header: 'py-2 px-4 text-left text-sm font-bold text-foreground border-b border-r border-custom-grey/20 bg-gray-50 last:border-r-0',
    row: {
      border: 'border-b border-custom-grey/20'
    }
  },
  summary: {
    container: 'mt-4 space-y-1'
  }
} as const