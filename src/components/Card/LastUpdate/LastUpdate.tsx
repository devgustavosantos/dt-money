import { useLastUpdate } from './LastUpdate.hook';
import * as S from './LastUpdate.styles';
import { LastUpdateProps } from './LastUpdate.types';

export function LastUpdate({ date, prefix, isHighlighted }: LastUpdateProps) {
  const { message } = useLastUpdate({ date, prefix });

  return (
    <S.LastUpdateContainer isHighlighted={isHighlighted}>
      {message}
    </S.LastUpdateContainer>
  );
}
