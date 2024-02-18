import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/assets/new')({
  component: AssetsNew,
});

function AssetsNew() {
  return (
    <>
      <div className='py-2 flex px-4'>
        <h1 className='text-2xl font-semibold'>Assets</h1>
      </div>
      <div className='px-4'>
        <p className='text-muted-foreground mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </>
  );
}
