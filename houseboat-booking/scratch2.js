const { createClient } = require('next-sanity');
const client = createClient({
  projectId: "j9sfsph2",
  dataset: "houseboatbooking",
  apiVersion: "2024-01-01",
  useCdn: false
});

async function main() {
  const data = await client.fetch(`*[_type == "houseboat"][0..2] {
    name,
    category,
    startingPrice,
    dayCruisePrice,
    overnightPrice
  }`);
  console.log(JSON.stringify(data, null, 2));
}
main();
