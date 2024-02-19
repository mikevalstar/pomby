import { cn } from '@/lib/utils';
import { useDropzone } from 'react-dropzone';

interface IFileDropperProps {
  uploadFile: (file: File) => void;
}

function FileDropper({ uploadFile }: IFileDropperProps) {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.gif'] },
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file: File) => {
        uploadFile && uploadFile(file);
      });
    },
  });

  return (
    <section className='p-4'>
      <div
        {...getRootProps({
          className: cn('border-dashed border-2 border-muted px-6 py-10 text-center m-4 cursor-pointer', {
            'border-primary': isDragAccept,
            'bg-muted': isDragAccept,
          }),
        })}>
        <input {...getInputProps()} />
        {!isDragActive && <p className='text-muted-foreground'>Drag 'n' drop some new files here</p>}
        {isDragAccept && <p className='text-foreground'>Drop files here to upload</p>}
        {isDragReject && <p className='text-red-500'>Invalid file type!</p>}
      </div>
    </section>
  );
}

export default FileDropper;
