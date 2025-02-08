import { RuleSet } from 'styled-components';

type Variants = 'medium' | 'large';

type VariantsStyles = {
  [key in Variants]: RuleSet<object>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants;
}

export type { VariantsStyles, ButtonProps };
