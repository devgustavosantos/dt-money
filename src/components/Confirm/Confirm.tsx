import { FormModal } from '@/components';
import { DICTIONARY } from '@/utils';

import { useConfirm } from './Confirm.hook';

export function Confirm() {
  const { handleConfirm, shouldModalVisible } = useConfirm();

  if (!shouldModalVisible) return null;

  return (
    <FormModal
      handleFormSubmit={handleConfirm}
      title={DICTIONARY.DIFFERENT_DEVICE}
      description={DICTIONARY.DIFFERENT_DEVICE_DESCRIPTION}
      actionText={DICTIONARY.CONFIRM}
    />
  );
}
