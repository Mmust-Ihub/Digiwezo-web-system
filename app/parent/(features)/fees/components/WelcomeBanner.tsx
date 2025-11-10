import { FC } from 'react'
import Image from 'next/image'
import type { BannerProps } from '@/parent/(features)/fees/types/banner'
import { bannerStyles } from '@/parent/(features)/fees/components/styles/banner.styles'
import { BANNER_CONFIG } from '@/parent/(features)/fees/data/banner'

export const WelcomeBanner: FC<BannerProps> = ({ username, message }) => {
  return (
    <div 
      className={`${bannerStyles.container} h-[${BANNER_CONFIG.dimensions.container.height}px] w-full max-w-[${BANNER_CONFIG.dimensions.container.maxWidth}px]`}
      style={{
        backgroundImage: `url(${BANNER_CONFIG.images.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={bannerStyles.content}>
        <h2 className={bannerStyles.title}>Welcome back, {username}</h2>
        <p className={bannerStyles.description}>{message}</p>
      </div>
      <div className={bannerStyles.imageWrapper}>
        <Image 
          src={BANNER_CONFIG.images.illustration}
          alt="Fees illustration"
          width={BANNER_CONFIG.dimensions.illustration.width}
          height={BANNER_CONFIG.dimensions.illustration.height}
          className={`${bannerStyles.image} h-[${BANNER_CONFIG.dimensions.illustration.height}px]`}
        />
      </div>
    </div>
  )
}