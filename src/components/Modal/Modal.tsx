import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

export function Modal({
  trigger,
  title,
  description,
  content,
  isLarge = true,
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <S.CustomOverlay />
        <S.CustomContent isLarge={isLarge}>
          <S.CustomTitle>{title}</S.CustomTitle>
          {description && (
            <S.CustomDescription>{description}</S.CustomDescription>
          )}
          {content}
          <S.CustomClose>
            <X />
          </S.CustomClose>
        </S.CustomContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
