import style from './Card.module.css';
import ImageCard from './ImageCard/ImageCard';
import Felicitation from './Felicitation/Felicitation';
import CardBG from '../../img/card-bg.jpg';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <ImageCard img={CardBG} />
      <Felicitation />
    </div>
  </div>
);

export default Card;
