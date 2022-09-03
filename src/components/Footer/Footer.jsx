import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PinterestIcon } from '../../img/pinterest.svg';
import { ReactComponent as SUIcon } from '../../img/stumbleupon.svg';

const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
          <p>
            Design:{' '}
            <a
              className={style.copyright__link}
              href='https://t.me/Mrshmallowww'
              target='_blank'
              rel='noreferrer'>
              Anastasia Ilina
            </a>
          </p>
          <p>
            Coder:{' '}
            <a
              className={style.copyright__link}
              href='https://github.com/Bisquitman/happy-holiday-react'
              target='_blank'
              rel='noreferrer'>
              Bisquitman
            </a>
          </p>
          <p>© HBCard, 2022</p>
        </div>

        <ul className={style.social}>
          <li className={style.item}>
            <a href='https://vk.com' className={style.link}>
              <VKIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://t.me' className={style.link}>
              <TGIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://pinterest.com' className={style.link}>
              <PinterestIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://stumbleupon.com' className={style.link}>
              <SUIcon />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
