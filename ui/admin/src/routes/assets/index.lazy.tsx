import AssetFilters from '@/components/assetFilters';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, createLazyFileRoute } from '@tanstack/react-router';
import { Plus } from 'lucide-react';

export const Route = createLazyFileRoute('/assets/')({
  component: Assets,
});

function Assets() {
  return (
    <div className='grid grid-cols-10 gap-4'>
      <div className='col-span-2'>
        <AssetFilters />
      </div>
      <div className='col-span-8'>
        <div className='py-2 flex px-4'>
          <h1 className='text-2xl font-semibold'>Assets</h1>
          <div className='flex ml-auto '>
            <Link to={'/assets/new'} className={cn(buttonVariants({ variant: 'outline' }))}>
              <Plus className={'mr-2 h-4 w-4'} /> Add New
            </Link>
          </div>
        </div>
        <div className='px-4'>
          <p className='text-muted-foreground mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
