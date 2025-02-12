import React from 'react';

import { COLORS } from '@/styles';

type ColorOptions = keyof typeof COLORS;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  symbol: React.FC;
  variant: ColorOptions;
}

export type IconContainerProps = Omit<IconProps, 'symbol'>;
