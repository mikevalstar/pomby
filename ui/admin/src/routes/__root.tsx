import ModeSwitch from '@/components/modeSwitch';
import Search from '@/components/search';
import TopNav from '@/components/topNav';
import { Toaster } from '@/components/ui/sonner';
import UserNav from '@/components/userTopNav';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <div className='grid grid-cols-10 gap-4'>
        <div className='col-span-10'>
          <div className='flex h-16 items-center px-4'>
            <TopNav />
            <div className='ml-auto flex items-center space-x-4'>
              <ModeSwitch />
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className='col-span-10'>
          <div className='py-2'>
            <Outlet />
          </div>
        </div>
        <TanStackRouterDevtools />
        <Toaster />
      </div>
    );
  },
});
