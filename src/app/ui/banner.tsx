import Image from 'next/image'
import image from '../../../public/banner.jpg'
const banner_ = image

export default function Banner(){
    return(
        <Image src={banner_} width={80} height={80} alt="Picture of the author" />)
}