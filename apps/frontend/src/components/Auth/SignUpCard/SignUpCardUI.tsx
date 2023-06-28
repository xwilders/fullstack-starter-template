import { useState, ReactNode } from 'react';
import cx from 'clsx';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useForm, UseFormRegister, FieldError } from 'react-hook-form';
import { Link } from 'react-router-dom';

export type EmailAndPassword = {
  email: string;
  password: string;
};

type SignUpCardProps = {
  onSubmit(values: EmailAndPassword): void;
};

type InputProps = {
  name: keyof EmailAndPassword;
  label: string;
  type?: string;
  validation?: {
    minLength?: { value: number; message: string };
    required: string | boolean;
  };
  register: UseFormRegister<EmailAndPassword>;
  className?: string;
  children?: ReactNode;
  error?: FieldError;
};

const Input = ({
  name,
  label,
  register,
  validation,
  type,
  className,
  children,
  error,
}: InputProps) => {
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
function SignUpCardUI({ onSubmit }: SignUpCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<EmailAndPassword>();

  return (
    <div className="bg-gray-800">
      <div className="flex flex-col max-w-lg py-12 px-6 mx-auto space-y-8">
        <div className="flex flex-col items-center space-x-4 space-y-3">
          <div className="text-4xl font-bold">Sign up</div>
          <div className="text-gray-600 text-lg">
            to enjoy all of our cool features
            <span role="img" aria-label="peace-emoji" className="pl-1">
              ✌️
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              <Input
                name="email"
                label="Email"
                validation={{ required: 'Email is required' }}
                register={register}
                error={errors.email}
              />
              <Input
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                validation={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Minimum length should be 8',
                  },
                }}
                register={register}
                className="relative inline-block w-full"
                error={errors.password}
              >
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:bg-gray-600 p rounded">
                  <div
                    className="hover:bg-gray-600 p-2 rounded"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </button>
              </Input>
              <div className="flex flex-col space-y-10 pt-6">
                <button
                  className="text-md bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded font-semibold"
                  type={'submit'}
                >
                  {isSubmitting ? 'Submitting' : 'Sign up'}
                </button>
              </div>
              <div>
                <div className="text-center">
                  Already a user?{' '}
                  <Link to={'/login'} className="text-blue-400">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpCardUI;
