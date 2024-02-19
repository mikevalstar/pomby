import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';

export type Asset = {
  id: string;
  title: string;
  url: string;
  originalFilename: string;
};

export const columns: ColumnDef<Asset>[] = [
  {
    accessorKey: 'url',
    header: 'Image',
    cell: ({ row }) => {
      return (
        <a target='__NEW' href={row.original.url}>
          <img src={row.original.url} alt={row.original.title} className='h-14 w-14' />
        </a>
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'id',
    header: 'Edit',
    cell: ({ row }) => {
      return (
        <Link
          to={`/assets/$assetID/$assetName`}
          params={{ assetID: row.original.id, assetName: row.original.title }}
          className={cn(buttonVariants({ variant: 'outline' }))}>
          <Pencil className={'mr-2 h-3 w-3'} />
          Edit
        </Link>
      );
    },
  },
];
