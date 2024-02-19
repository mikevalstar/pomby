import AssetsPage from '@/pages/assets/assets';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/assets/')({
  component: AssetsPage,
});
