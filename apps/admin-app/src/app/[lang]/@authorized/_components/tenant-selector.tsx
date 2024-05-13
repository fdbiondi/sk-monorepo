import { Building2, ChevronDown } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { createClient } from '@/lib/supabase/server';

interface Props {
  tenantId: string;
  big?: boolean;
}

const TenantSelector: React.FC<Props> = async ({ tenantId, big }) => {
  const supabase = createClient(cookies());
  const { data, error: tenantError } = await supabase
    .from('tenants')
    .select('*');

  if (tenantError !== null) {
    console.error('tenant query error', tenantError);

    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-between w-full p-1">
        <Building2 size={38} strokeWidth={1.5} />
        {big &&
          (data.find((tenant) => tenant.id === tenantId)?.name ??
            'Select Tenant')}
        <ChevronDown size={24} strokeWidth={1.5} className="justify-self-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        {data.map((tenant) => (
          <Link key={tenant.id} href={`/${tenant.id}/home`}>
            <DropdownMenuCheckboxItem
              checked={tenant.id === tenantId}
              key={tenant.id}
            >
              {tenant.name}
            </DropdownMenuCheckboxItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TenantSelector;
