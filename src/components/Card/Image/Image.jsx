import style from './Image.module.css';
import img from '../../../img/card-bg.jpg'

const Image = () => (
  <img className={style.img} src={img} alt='Фоновая картинка открытки' />
);

export default Image;