import type { FeeStructureItem } from '@parent/(features)/fees/types/fees-structure'
import type { FormattedFeeStructureItem } from '@parent/(features)/fees/types/fee-hooks'

export const formatFeeItem = (item: FeeStructureItem): FormattedFeeStructureItem => ({
  ...item,
  mandatory: {
    tuition: `${item.mandatory.tuition.toLocaleString()}.00`
  },
  optional: {
    lunch: `${item.optional.lunch.toLocaleString()}.00`,
    swimming: typeof item.optional.swimming === 'number' 
      ? `${item.optional.swimming.toLocaleString()}.00` 
      : item.optional.swimming,
    transport: item.optional.transport.toString(),
    boarding: item.optional.boarding.toString()
  }
})
