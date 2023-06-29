import { useState, ReactNode } from 'react';
import {
  useForm,
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: string;
  validation?: {
    minLength?: { value: number; message: string };
    required: string | boolean;
  };
  register: UseFormRegister<T>;
  className?: string;
  children?: ReactNode;
  error?: FieldError;
};

export const Input = <T extends FieldValues>({
  name,
  label,
  register,
  validation,
  type,
  className,
  children,
  error,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="mb-2 font-semibold">
        {label}
      </label>
      <div className={className}>
        <input
          {...register(name, validation)}
          type={type}
          className={`block rounded-md bg-transparent border w-full p-2 pl-4 ${
            error ? 'border-red-600' : ''
          }`}
        />
        {children}
      </div>
      {error && <div className="mt-2 text-red-600">{error.message}</div>}
    </div>
  );
};
