import { FC } from 'react'
import { FeeStatement } from './FeeStatement'
import { DUMMY_FEE_RECEIPT } from '@/parent/(features)/fees/data/dummy-data'

export const DefaultFeeStatement: FC = () => {
  return <FeeStatement receipt={DUMMY_FEE_RECEIPT} />
}