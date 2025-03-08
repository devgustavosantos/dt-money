import { ReactNode } from 'react';

export interface ModalProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  content: ReactNode;
}
