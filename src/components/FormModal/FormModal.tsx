import { Button } from '@/components';
import { custom as C } from '@/styles';
import { DICTIONARY } from '@/utils';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useFormModal } from './FormModal.hook';
import * as S from './FormModal.styles';
import { FormModalProps } from './FormModal.types';

export function FormModal({
  handleFormSubmit,
  title,
  description,
  actionText,
}: FormModalProps) {
  const { handleSubmit, register, onSubmit, error, isLoading } = useFormModal({
    handleFormSubmit,
  });

  return (
    <AlertDialog.Root open>
      <AlertDialog.Portal>
        <C.AlertDialogOverlay />
        <C.AlertDialogContent>
          <C.AlertDialogTitle>{title}</C.AlertDialogTitle>
          <C.AlertDialogDescription>{description}</C.AlertDialogDescription>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder={DICTIONARY.EMAIL}
              autoFocus
              {...register('email')}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <Button
              type="submit"
              variant="large"
              disabled={!!error || isLoading}
            >
              {!isLoading && actionText}
              {isLoading && <S.CustomCircleNotch weight="bold" />}
            </Button>
          </S.Form>
        </C.AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
