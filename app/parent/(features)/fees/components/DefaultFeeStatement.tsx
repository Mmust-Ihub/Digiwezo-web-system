import { FC } from 'react'
import { FeeStatement } from '@/parent/(features)/fees/components/FeeStatement'
import { DUMMY_FEE_RECEIPT } from '@/parent/(features)/fees/data/dummy-data'

export const DefaultFeeStatement: FC = () => {
  return <FeeStatement receipt={DUMMY_FEE_RECEIPT} />
}
