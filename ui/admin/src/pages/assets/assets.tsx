import AssetFilters from '@/components/assetFilters';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePombyAssetsQuery } from '@graph';
import { Link } from '@tanstack/react-router';
import { Plus } from 'lucide-react';

import { columns } from './components/AssetColumns';
import { DataTable } from './components/AssetTable';

function AssetsPage() {
  const { data } = usePombyAssetsQuery();

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
          <DataTable columns={columns} data={data?.assets || []} />
        </div>
      </div>
    </div>
  );
}

export default AssetsPage;
