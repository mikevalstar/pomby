import { usePombyAssetQuery } from '@graph';
import { useParams } from '@tanstack/react-router';
import { LoaderIcon } from 'lucide-react';

function AssetsPage() {
  const params = useParams({ from: '/assets/$assetID/$assetName' });

  const { data, loading, error } = usePombyAssetQuery({
    variables: {
      id: params.assetID,
    },
  });

  if (loading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <LoaderIcon className='h-8 w-8 animate-spin' />
      </div>
    );
  }

  if (error || !data?.asset) {
    return <div>Error: {error?.message || 'Unknonw Error'}</div>;
  }

  return (
    <div className='grid grid-cols-10 gap-4'>
      <div className='col-span-10'>
        <div className='py-2 flex px-4'>
          <h1 className='text-3xl font-semibold'>Asset</h1>
        </div>
        <div className='px-4'>
          {data?.asset?.title}
          <img className='max-w-5xl' src={data?.asset?.url} alt={data?.asset?.title} />
        </div>
        <div className='px-4'>
          <h2 className='text-2xl font-semibold'>Properties</h2>
          <div>
            <p>Original Filename: {data?.asset?.originalFilename}</p>
            <p>Created At: {data?.asset?.createdAt}</p>
            <p>Updated At: {data?.asset?.updatedAt}</p>
            <p>Public URL: {data?.asset?.publicUrl}</p>
            <p>Public: {data?.asset?.public ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetsPage;
