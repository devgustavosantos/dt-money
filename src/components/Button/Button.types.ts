import { RuleSet } from 'styled-components';

type Variants = 'medium' | 'large';

type VariantsStyles = {
  [key in Variants]: RuleSet<object>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants;
  isMuted?: boolean;
}

export type { VariantsStyles, ButtonProps };
