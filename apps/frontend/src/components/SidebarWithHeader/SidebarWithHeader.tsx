import { ReactNode, useState } from 'react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiX,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import AuthHeader from '@frontend/components/Auth/AuthHeader/AuthHeader';
import { Route, Link } from 'react-router-dom';
import clsx from 'clsx';

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, path: '/' },
  { name: 'Trending', icon: FiTrendingUp, path: '/trending' },
  { name: 'Explore', icon: FiCompass, path: '/explore' },
  { name: 'Favourites', icon: FiStar, path: '/favourites' },
  { name: 'Settings', icon: FiSettings, path: '/settings' },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, openSidebar] = useState(false);

  const onClose = () => {
    openSidebar(false);
  };

  const onOpen = () => {
    openSidebar(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <SidebarContent onClose={onClose} className="hidden md:block" />

      <SidebarContent
        onClose={onClose}
        className={clsx(
          'z-10 block md:hidden',
          'w-full transition-all duration-300 ease-out',
          {
            'translate-x-0 transform': isOpen,
            '-translate-x-full': !isOpen,
          }
        )}
      />

      <TopBar onOpen={onOpen} />
      <div className="ml-0 px-12 pt-4 md:ml-60">{children}</div>
    </div>
  );
}

interface SidebarProps {
  onClose: () => void;
  className: string;
}

const SidebarContent = ({ onClose, className }: SidebarProps) => {
  return (
    <div
      className={clsx(
        className,
        'fixed  h-full border-r border-gray-700 bg-gray-900 md:w-64'
      )}
    >
      <div className="mx-8 flex h-20 items-center justify-between">
        <div className="font-mono text-2xl font-bold">Logo</div>
        <button
          className="flex rounded p-2 outline-none  hover:bg-gray-600 md:hidden"
          onClick={onClose}
        >
          <FiX />
        </button>
      </div>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </div>
  );
};

interface NavItemProps {
  icon: IconType;
  children: string | number;
  path: string;
  onClick: () => void;
}
const NavItem = ({ icon, children, path, onClick }: NavItemProps) => {
  const Icon = icon;

  return (
    <Link to={path} className="focus:shadow-none">
      <div
        className="mx-4 cursor-pointer items-center rounded-lg p-4 hover:bg-cyan-400 hover:text-white"
        onClick={onClick}
      >
        <Icon className="mr-4 inline-block text-base hover:text-white" />
        {children}
      </div>
    </Link>
  );
};

interface MobileProps {
  onOpen: () => void;
}
const TopBar = ({ onOpen }: MobileProps) => {
  return (
    <div
      className={
        'ml-0 flex h-20 items-center justify-between border-b border-gray-700 bg-gray-900 px-4 md:ml-60 md:justify-end'
      }
    >
      <button
        className={
          'flex rounded p-2  outline-none hover:bg-gray-600 focus:outline-none md:hidden'
        }
        onClick={onOpen}
        aria-label="open menu"
      >
        <FiMenu />
      </button>

      <div className="flex font-mono text-2xl font-bold md:hidden">Logo</div>

      <div className="flex space-x-2   md:space-x-6">
        <button
          className="rounded bg-transparent p-2 text-lg hover:bg-gray-600"
          aria-label="open menu"
        >
          <FiBell />
        </button>
        <AuthHeader />
      </div>
    </div>
  );
};
