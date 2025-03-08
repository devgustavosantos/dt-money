import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

export function Modal({ trigger, title, description, content }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <S.CustomOverlay />
        <S.CustomContent>
          <S.CustomTitle>{title}</S.CustomTitle>
          {description && (
            <Dialog.Description>{description}</Dialog.Description>
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
