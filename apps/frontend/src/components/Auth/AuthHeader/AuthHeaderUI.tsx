import { useState, Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';

export type User = {
  username: string;
  role: string;
  avatarUrl: string;
};

export type AuthHeaderProps = {
  user?: User;
  handleSignOut: () => void;
};

const AuthHeaderUI = (props: AuthHeaderProps) => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative flex space-x-0 md:space-x-6">
      <div className="flex items-center">
        {props.user ? (
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="py-2">
                  <div
                    className="flex flex-row space-x-4"
                    onClick={() => setOpen(!isOpen)}
                  >
                    <img
                      className="my-auto h-6 w-6 rounded-full"
                      src={props.user?.avatarUrl}
                      alt="avatar"
                    />
                    <div className="hidden space-y-1  pt-4 md:flex">
                      <div className="ml-2 flex-col items-start text-left">
                        <p className="text-sm">{props.user?.username}</p>
                        <p className="text-xs text-gray-600">
                          {props.user?.role}
                        </p>
                      </div>
                      <div className="pl-2">
                        <FiChevronDown />
                      </div>
                    </div>
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 top-full z-10 mt-2 w-48 rounded bg-gray-800 py-1 shadow-lg">
                    <button className="block w-full p-2 px-4 text-left hover:bg-gray-600">
                      Profile
                    </button>
                    <button className="block w-full p-2 px-4 text-left hover:bg-gray-600">
                      Settings
                    </button>
                    <hr className="border-t border-gray-600" />
                    <button
                      onClick={props.handleSignOut}
                      className="block w-full p-2 px-4 text-left hover:bg-gray-600"
                    >
                      Sign out
                    </button>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ) : (
          <div className="flex gap-2">
            <button
              className="w-30 rounded bg-gray-800 p-2 px-4 font-bold hover:bg-gray-600"
              onClick={() => navigate('/sign-up')}
            >
              Sign up
            </button>
            <button
              className="w-30 rounded bg-gray-800 p-2 px-4 font-bold hover:bg-gray-600"
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthHeaderUI;
