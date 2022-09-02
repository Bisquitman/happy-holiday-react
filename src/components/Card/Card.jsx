import style from './Card.module.css';
import ImageCard from './ImageCard/ImageCard';
import Felicitation from './Felicitation/Felicitation';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <ImageCard />
      <Felicitation />
    </div>
  </div>
);

export default Card;
