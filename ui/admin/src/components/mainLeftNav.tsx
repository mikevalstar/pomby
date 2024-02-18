import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

function MainLeftNav() {
  const nav = useNavigate();

  return (
    <div data-collapsed={false} className='group py-2 data-[collapsed=true]:py-2'>
      <nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
        <Button
          variant={'ghost'}
          size={'sm'}
          onClick={() => nav({ to: '/' })}
          className='justify-start dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'>
          Home
        </Button>
        <Button
          variant={'ghost'}
          size={'sm'}
          onClick={() => nav({ to: '/about' })}
          className='justify-start dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'>
          About
        </Button>
        <Button
          variant={'ghost'}
          size={'sm'}
          className='justify-start dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'>
          Title Here
        </Button>
        <Button
          variant={'ghost'}
          size={'sm'}
          className='justify-start dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'>
          Title Here
        </Button>
      </nav>
    </div>
  );
}

export default MainLeftNav;
