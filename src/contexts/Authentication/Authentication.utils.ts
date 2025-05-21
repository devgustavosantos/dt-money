import { others } from '@/utils';

const CURRENT_STEP_KEY = others.getLocalStorageKey('currentStep');

const allowedSteps = ['welcome', 'send', 'loggedIn'] as const;

export { CURRENT_STEP_KEY, allowedSteps };
