import { FC } from 'react'
import { WelcomeBanner } from './WelcomeBanner'
import { BANNER_CONFIG } from '@/parent/(features)/fees/data/banner'

export const DefaultWelcomeBanner: FC = () => {
  return (
    <WelcomeBanner 
      username={BANNER_CONFIG.username}
      message={BANNER_CONFIG.message}
    />
  )
}