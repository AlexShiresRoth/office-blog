import Image from 'next/image'

export const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 80} `
}

const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} className="object-cover object-center" />
}

export default ContentfulImage
