import MainLeftNav from '@/components/ui/mainLeftNav';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <div className='grid grid-cols-10 gap-4'>
        <div className='col-span-2'>
          <MainLeftNav />
        </div>
        <div className='col-span-8'>
          <div className='py-2'>
            <Outlet />
            <TanStackRouterDevtools />
          </div>
        </div>
      </div>
    );
  },
});
