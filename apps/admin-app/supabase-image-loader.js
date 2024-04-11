export default function supabaseLoader({ src, width, height, quality }) {
  const bucket = src.split('/').shift();
  const path = src.split('/').slice(1).join('/');
  const url = new URL(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/${bucket}/${path}`,
  );

  url.searchParams.set('width', width.toString());
  url.searchParams.set('height', (height || 0).toString());
  url.searchParams.set('quality', (quality || 75).toString());

  return url.href;
  // {URL}/storage/v1/object/sign/{BUCKET}/{PRODUCT}/{FILE}?token={TOKEN}&t={EXPIRES}
  // {URL}/storage/v1/object/public/{BUCKET}/{BRAND}/{FILE}?width={WIDTH}&height={HEIGHT}&quality={QUALITY}
  // {URL}/storage/v1/render/image/public/{BUCKET}/{BRAND}/{FILE}?width={WIDTH}&height={HEIGHT}&quality={QUALITY}
  // {URL}/storage/v1/render/image/public/${src}?width=${width}&height=${height || 0}&quality=${quality || 75}
  // {URL}/storage/v1/object/sign/${src}
}
