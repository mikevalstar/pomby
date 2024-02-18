import { Button } from '@/components/ui/button';

import './styles/globals.css';

function App() {
  return (
    <div className='grid grid-cols-10 gap-4'>
      <div className='col-span-2'>
        <div data-collapsed={false} className='group py-2 data-[collapsed=true]:py-2'>
          <nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
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
      </div>
      <div className='col-span-8'>
        <div className='py-2'>
          <h1 className='text-2xl font-bold'>Title Here</h1>
          <p className='text-lg'>Content Here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
