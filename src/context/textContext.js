import { createContext, useState } from 'react';

export const textContext = createContext('');

export const TextContextProvider = ({ children }) => {
  const [text, setText] = useState(
    `Поздравляю с днем рожденья!\nПусть будет жизнь полна веселья,\nНе будет грусти и хлопот,\nА только счастье круглый год!\n\nЖелаю творческих успехов,\nПрекрасных дней, улыбок, смеха.\nЛюбви, душевного тепла,\nКак сказка, чтобы жизнь была!`,
  );

  return <textContext.Provider value={{ text, setText }}>{children}</textContext.Provider>;
};
