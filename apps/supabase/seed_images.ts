import { Database } from '@skillstery/supabase';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

function getImage(seed: string) {
  return `https://picsum.photos/seed/${seed}/160/90`;
}

async function createImage(
  supabase: SupabaseClient,
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

  const { data: products } = await supabase.from('products').select();

  if (products) {
    for (const product of products) {
      const imageName = `${product.id}/image_${product.name.replace(/ /g, '_').toLowerCase()}.jpg`;

      const path = await createImage(
        supabase,
        product.id,
        imageName,
        'products'
      );

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
