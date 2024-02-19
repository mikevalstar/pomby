import FileDropper from '@/components/fileDropper';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const Route = createLazyFileRoute('/assets/new')({
  component: AssetsNew,
});

function AssetsNew() {
  const [isUploading, setIsUploading] = useState(false);
  const [fileQueue, setFileQueue] = useState<Array<{ status: string; file: File }>>([]);

  const uploadFile = (file: File) => {
    setFileQueue((prev) => [...prev, { status: 'queued', file }]);
  };

  useEffect(() => {
    if (fileQueue.length > 0 && !isUploading && fileQueue[0]) {
      const data = new FormData();
      data.append('file', fileQueue[0].file);

      fetch('/api/upload/new', {
        method: 'POST',
        body: data,
      })
        .then((res) => {
          if (res.status !== 200) {
            toast.error('File upload failed');
            console.error(res);
            setFileQueue((prev) => prev.slice(1));
            setIsUploading(false);
            return;
          }

          toast.success('File uploaded');
          console.log(res);
          setFileQueue((prev) => prev.slice(1));
          setIsUploading(false);
        })
        .catch((err) => {
          toast.error('File upload failed');
          console.error(err);
          setFileQueue((prev) => prev.slice(1));
          setIsUploading(false);
        });
    }
  }, [fileQueue, isUploading]);

  return (
    <>
      <div className='py-2 flex px-4'>
        <h1 className='text-2xl font-semibold'>Assets</h1>
      </div>
      <div className='px-4'>
        <FileDropper uploadFile={uploadFile} />
      </div>
    </>
  );
}
