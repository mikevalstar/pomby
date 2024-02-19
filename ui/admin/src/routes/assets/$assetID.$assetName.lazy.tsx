import AssetPage from '@/pages/assets/asset';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/assets/$assetID/$assetName')({
  component: AssetPage,
});
