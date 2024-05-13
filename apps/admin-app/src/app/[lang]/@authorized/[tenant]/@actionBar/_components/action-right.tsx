import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { WithDictionary } from '@/typings';

interface Props extends WithDictionary {
  children: string;
}

const ActionRight: React.FC<Props> = ({ children }) => {
  return (
    <Button size="sm" className="self-end">
      <Link href={'products/new'}>{children}</Link>
    </Button>
  );
};

export default ActionRight;
