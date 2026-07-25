const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v27o1iio',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

async function run() {
  const data = await client.fetch(`*[_type == "houseboat"][0] { name, gallery }`);
  console.log(data);
}

run();
