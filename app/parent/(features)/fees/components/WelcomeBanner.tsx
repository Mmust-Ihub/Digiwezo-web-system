import Image from 'next/image'
import { banner_data } from '@parent/(features)/fees/data/banner'
import { bannerStyles } from '@parent/(features)/fees/styles/banner.styles'

export const WelcomeBanner = () => {
  return (
    <div 
      className={`${bannerStyles.container} h-[${banner_data.dimensions.container.height}px] w-full max-w-[${banner_data.dimensions.container.maxWidth}px]`}
      style={{
        backgroundImage: `url(${banner_data.images.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={bannerStyles.content}>
        <h2 className={bannerStyles.title}>Welcome back, {banner_data.username}</h2>
        <p className={bannerStyles.description}>{banner_data.message}</p>
      </div>
      <div className={bannerStyles.imageWrapper}>
        <Image 
          src={banner_data.images.illustration}
          alt="Fees illustration"
          width={banner_data.dimensions.illustration.width}
          height={banner_data.dimensions.illustration.height}
          className={`${bannerStyles.image} h-[${banner_data.dimensions.illustration.height}px]`}
        />
      </div>
    </div>
  )
}
