import { usePombyAssetQuery } from '@graph';
import { useParams } from '@tanstack/react-router';

function AssetsPage() {
  const params = useParams({ from: '/assets/$assetID/$assetName' });

  const { data } = usePombyAssetQuery({
    variables: {
      id: params.assetID,
    },
  });

  return (
    <div className='grid grid-cols-10 gap-4'>
      <div className='col-span-10'>
        <div className='py-2 flex px-4'>
          <h1 className='text-2xl font-semibold'>Asset</h1>
        </div>
        <div className='px-4'>
          {data?.asset?.title}
          <img className='max-w-5xl' src={data?.asset?.url} alt={data?.asset?.title} />
        </div>
      </div>
    </div>
  );
}

export default AssetsPage;
