import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import CardBG from '../../../img/card-bg.jpg';

const ImageCard = () => {
  const { urlImg } = useContext(imgContext)
  console.log('urlImg: ', urlImg);
  
  return (
    <img src={urlImg || CardBG} alt='Фоновая картинка открытки' width={840} height={520} />
  )
};

export default ImageCard;