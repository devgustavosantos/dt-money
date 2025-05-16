import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { signInFormSchema, SignInFormType } from './SignIn.types';

export function useSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  function onSubmit(data: SignInFormType) {
    console.log('>>> data', data);
  }

  const emailError = errors.email?.message;

  return { onSubmit, register, handleSubmit, emailError };
}
