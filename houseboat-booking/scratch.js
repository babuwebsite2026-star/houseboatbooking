const { createClient } = require('next-sanity');
const client = createClient({
  projectId: "4jxt02v0", // wait, I need to get projectId from .env.local
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false
});
// Need to find projectId first.
