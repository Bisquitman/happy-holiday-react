import { useSelector } from 'react-redux';
import CardBG from '../../../img/card-bg.jpg';

const ImageCard = () => {
  const { urlImg } = useSelector((state) => state.image);

  return (
    <img
      src={urlImg || CardBG}
      alt='Фоновая картинка открытки'
      width={840}
      height={520}
    />
  );
};

export default ImageCard;
