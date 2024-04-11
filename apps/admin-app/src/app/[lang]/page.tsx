import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/dashboard');

  return <p>Landing</p>;
}
