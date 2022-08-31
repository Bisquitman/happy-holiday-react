import { useState } from 'react';
import style from './Choises.module.css';

const holidays = {
  newyear: 'Новый год',
  birthdayWomen: 'День рождения  Ж',
  birthdayMen: 'День рождения  М',
  womenday: '8 марта',
  knowledgeday: 'День знаний',
};

const Choises = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  const [holiday, setHoliday] = useState('Выбрать праздник');

  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };

  const changeHoliday = (title) => {
    setHoliday(title);
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoises}>{holiday}</button>
      {isOpenChoises && (
        <ul className={style.list}>
          {Object.entries(holidays).map((entry) => (
            <li 
              className={style.item} 
              key={entry[0]}
              onClick={() => {
                changeHoliday(entry[1]);
                toggleChoises();
              }}
            >
              {entry[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choises;
