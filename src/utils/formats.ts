export const formats = {
  money: new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }),
  date: new Intl.DateTimeFormat('pt-br'),
};
