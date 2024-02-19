import { Input } from './ui/input';

function AssetFilters() {
  return (
    <div data-collapsed={false} className='group py-2 data-[collapsed=true]:py-2 px-4'>
      <h2 className='text-xl font-semibold'>Filters</h2>
      <div className='py-2'>
        <Input type='search' placeholder='Search...' className='w-full' />
      </div>
    </div>
  );
}

export default AssetFilters;
