import FeeStatement from '@parent/(features)/fees/components/FeeStatement'
import { dummy_fee_receipt } from '@parent/(features)/fees/data/dummy-data'

export const DefaultFeeStatement = () => {
  return <FeeStatement receipt={dummy_fee_receipt} />
}
