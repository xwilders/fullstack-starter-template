import { useForm } from 'react-hook-form';
import { EmailAndPassword } from '../SignUpCard/SignUpCardUI';
import { Input } from '@frontend/components';
import { Link } from 'react-router-dom';

type SignInCardProps = {
  rememberMe: boolean;
  onSubmit(values: EmailAndPassword): void;
  handleRememberMe(value: boolean): void;
};

function SignInCardUI({
  onSubmit,
  rememberMe,
  handleRememberMe,
}: SignInCardProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<EmailAndPassword>();

  return (
    <div className="bg-gray-800">
      <div className="mx-auto flex max-w-lg flex-col space-y-8 px-6 py-12">
        <div className="flex flex-col items-center space-x-4 space-y-3">
          <div className="text-4xl font-bold">Sign in to your account</div>
          <div className="text-lg text-gray-600">
            to enjoy all of our cool features
            <span role="img" aria-label="peace-emoji" className="pl-1">
              ✌️
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              <Input
                name="email"
                label="Email"
                type="email"
                validation={{ required: 'Email is required' }}
                register={register}
                error={errors.email}
              />
              <Input
                name="password"
                label="Password"
                type="password"
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
              />
              <div className="flex flex-col items-start justify-between sm:flex-row">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    className="h-5 w-5 cursor-pointer rounded transition duration-300"
                    onChange={(e) => handleRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="remember"
                    className="cursor-pointer select-none text-gray-100"
                  >
                    Remember me
                  </label>
                </div>

                <Link to={'/login'} className="text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="flex flex-col space-y-10 pt-6">
                <button
                  className="text-md rounded bg-blue-400 px-4 py-2 font-semibold text-white hover:bg-blue-500"
                  type={'submit'}
                >
                  {isSubmitting ? 'Signing in' : 'Sign in'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInCardUI;
