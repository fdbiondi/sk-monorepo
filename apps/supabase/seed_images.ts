import { Database } from '@skillstery/supabase';
import { createClient } from '@supabase/supabase-js';

function getImage(seed: string) {
  return `https://picsum.photos/seed/${seed}/160/90`;
}

const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

async function createImage(
  seed: string,
  imageName: string,
  collectionName: string,
  debounceMs = 0,
  upsert = false
) {
  const image = await fetch(getImage(seed)).then((r) => r.blob());

  await new Promise((resolve) => setTimeout(resolve, debounceMs));

  const { data, error } = await supabase.storage
    .from(collectionName)
    .upload(imageName, image, { upsert });

  if (error) {
    console.error({
      e: JSON.stringify(error),
      message: `Failed to seed image ${imageName}`,
    });

    return null;
  }

  return data.path;
}

async function seedImages() {
  const { data: products } = await supabase.from('products').select();

  if (products) {
    for (const product of products) {
      const productName = product.name.replace(/ /g, '_').toLowerCase();
      const imageName = `${product.id}/image_${productName}.jpg`;

      const path = await createImage(product.id, imageName, 'products');

      if (path) {
        await supabase
          .from('products')
          .update({ image: path })
          .eq('id', product.id);

        console.info(`Seeded image for ${product.name}`);
      }
    }
  }
}

seedImages();
