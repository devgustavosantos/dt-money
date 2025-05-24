import { ReactNode } from 'react';

interface ModalContentProps {
  isLarge?: boolean;
}

interface ModalProps extends ModalContentProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  content: ReactNode;
}

export type { ModalProps, ModalContentProps };
