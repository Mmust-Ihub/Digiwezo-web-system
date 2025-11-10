export const bannerStyles = {
  container: "rounded-lg p-6 flex items-start justify-between mb-6 relative overflow-hidden sm:p-4 md:p-5 lg:p-6",
  content: "space-y-3 flex-1 pr-16 relative z-10 sm:pr-8 sm:space-y-2 md:pr-12 lg:pr-16",
  title: "text-white font-medium text-xl sm:text-lg md:text-xl",
  description: "text-white/90 text-sm leading-relaxed sm:text-xs md:text-sm",
  imageWrapper: "relative w-44 z-10 mr-8 sm:w-32 sm:mr-4 md:w-40 md:mr-6 lg:w-44 lg:mr-8",
  image: "object-cover absolute -top-2 -right-6 sm:-right-4 sm:-top-1 md:-right-5 md:-top-2 lg:-right-6 lg:-top-2"
} as const
