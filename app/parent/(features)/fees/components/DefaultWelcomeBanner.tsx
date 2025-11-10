import { FC } from 'react'
import { WelcomeBanner } from '@/parent/(features)/fees/components/WelcomeBanner'
import { BANNER_CONFIG } from '@/parent/(features)/fees/data/banner'

export const DefaultWelcomeBanner: FC = () => {
  return (
    <WelcomeBanner 
      username={BANNER_CONFIG.username}
      message={BANNER_CONFIG.message}
    />
  )
}