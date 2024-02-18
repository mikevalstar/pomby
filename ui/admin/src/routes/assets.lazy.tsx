import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/assets')({
  component: Assets,
});

function Assets() {
  return <div className='p-2'>Assets</div>;
}
