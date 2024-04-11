'use client';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { WithDictionary } from '@/typings';

interface TableRowProps extends WithDictionary {
  viewArhived: boolean;
}

const ViewArchived: React.FC<TableRowProps> = ({ viewArhived, dictionary }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={viewArhived ? '?viewArchived=false' : '?viewArchived=true'}
          >
            {viewArhived ? (
              <Eye size={40} className="text-slate-500" />
            ) : (
              <EyeOff size={40} className="text-slate-500" />
            )}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {viewArhived
              ? dictionary.crud.hideArchived
              : dictionary.crud.viewArchived}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ViewArchived;
