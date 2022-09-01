import { useContext, useState } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';
import style from './Choises.module.css';

const Choises = () => {
  const [isOpenChoises, setIsOpenChoises] = useState(false);
  const { holidays, holiday, changeHoliday } = useContext(holidaysContext);

  const toggleChoises = () => {
    setIsOpenChoises(!isOpenChoises);
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoises}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoises && (
        <ul className={style.list}>
          {Object.entries(holidays).map((entry) => (
            <li
              className={style.item}
              key={entry[0]}
              onClick={() => {
                changeHoliday(entry[0]);
                toggleChoises();
              }}>
              {entry[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choises;
