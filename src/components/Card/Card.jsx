import style from './Card.module.css';
import Image from './Image/Image';
import Text from './Text/Text';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <Image />
      <Text />
    </div>
  </div>
);

export default Card;
