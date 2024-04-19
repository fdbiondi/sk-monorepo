import { redirect } from 'next/navigation';

// export default async function Page() {
export default function Page() {
  // const allProducts = await db.select().from(products);

  // console.log({ allProducts });

  redirect('/dashboard');

  return <p>Landing</p>;
}
