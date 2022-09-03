import style from './EmptyCard.module.css';

const EmptyCard = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <p>
        Выберите повод для поздравления!
        <br />
        (Нажмите на кнопку "Выбрать праздник" вверху)
      </p>
    </div>
  </div>
);

export default EmptyCard;
