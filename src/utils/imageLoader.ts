import { ImageLoader } from 'next/image'

export const customLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const getProductImage = (productId: string, imageName: string) => {
  return `/images/products/${productId}/${imageName}`
}

export const getHeroImage = (imageName: string) => {
  return `/images/hero/${imageName}`
}

export const PRODUCT_IMAGES = {
  welding: {
    main: getProductImage('rti_welding', 'rti_welding.png'),
    models: '/images/products/rti_welding/models/',
    features: '/images/products/rti_welding/features/'
  },
  grinding: {
    main: getProductImage('rti_grinding', 'main.png')
  },
  weldingLaser: {
    main: getProductImage('rti_welding_laser', 'main.png')
  },
  cleaningLaser: {
    main: getProductImage('rti_cleaning_laser', 'main.png')
  },
  solarCarport: {
    main: getProductImage('rti_carport', 'main.png')
  }
}
