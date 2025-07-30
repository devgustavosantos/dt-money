import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';

import { DICTIONARY } from '@/utils';

export function Currency(props: CurrencyInputProps) {
  return (
    <CurrencyInput
      placeholder={DICTIONARY.PRICE}
      allowNegativeValue={false}
      decimalsLimit={2}
      decimalScale={2}
      intlConfig={{
        locale: 'pt-BR',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }}
      {...props}
    />
  );
}
