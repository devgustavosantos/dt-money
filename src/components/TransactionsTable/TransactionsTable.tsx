import { useTransactionsTable } from './TransactionsTable.hook';
import * as S from './TransactionsTable.styles';

export function TransactionsTable() {
  const { formattedTransactions } = useTransactionsTable();

  return (
    <S.TransactionsTableContainer as="table">
      <S.Body>
        {formattedTransactions.map(
          ({ id, description, amount, category, type, date }) => (
            <S.Row key={id}>
              <S.Description>{description}</S.Description>
              <S.Amount type={type}>
                {type === 'outcome' && '- '}
                {amount}
              </S.Amount>
              <S.Category>
                <S.CustomTagSimple />
                {category}
              </S.Category>
              <S.Date>
                <S.CustomCalendarBlank />
                {date}
              </S.Date>
            </S.Row>
          ),
        )}
      </S.Body>
    </S.TransactionsTableContainer>
  );
}
