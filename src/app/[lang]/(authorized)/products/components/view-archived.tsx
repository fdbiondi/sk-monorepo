'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { WithDictionary } from '@/typings';

interface TableRowProps extends WithDictionary {
  viewArhived: boolean;
}

const ViewArchived: React.FC<TableRowProps> = ({ viewArhived, dictionary }) => {
  return (
    <Button asChild>
      <Link href={viewArhived ? '?viewArchived=false' : '?viewArchived=true'}>
        {viewArhived
          ? dictionary.crud.hideArchived
          : dictionary.crud.viewArchived}
      </Link>
    </Button>
  );
};

export default ViewArchived;
