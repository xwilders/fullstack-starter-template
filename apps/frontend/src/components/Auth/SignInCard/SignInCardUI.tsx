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
      <div className="flex flex-col max-w-lg py-12 px-6 mx-auto space-y-8">
        <div className="flex flex-col items-center space-x-4 space-y-3">
          <div className="text-4xl font-bold">Sign in to your account</div>
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
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    className="w-5 h-5 transition duration-300 rounded cursor-pointer"
                    onChange={(e) => handleRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-gray-100 cursor-pointer select-none"
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
                  className="text-md bg-blue-400 text-white hover:bg-blue-500 py-2 px-4 rounded font-semibold"
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
