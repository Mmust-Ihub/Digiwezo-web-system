export const BANNER_CONFIG = {
  username: 'Peter',
  message: "We're delighted to see you again. Stay on top of your fees with a clear breakdown of balances, payments, and upcoming due dates. Ensure smooth learning by keeping your payments updated!",
  images: {
    background: '/assets/backgroundbannerfees.png',
    illustration: '/assets/image.png'
  },
  dimensions: {
    container: {
      height: 200,
      maxWidth: 1301
    },
    illustration: {
      width: 200,
      height: 140
    }
  }
} as const