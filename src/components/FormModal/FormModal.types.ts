import { FormModalType } from '@/types';

interface UseFormModalProps {
  handleFormSubmit: (data: FormModalType) => Promise<unknown>;
}

interface FormModalProps extends UseFormModalProps {
  title: string;
  description: string;
  actionText: string;
}

export type { FormModalProps, UseFormModalProps };
