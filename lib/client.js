import { createClient } from "@sanity/client";

const config = {
  projectId: "eko3wu0o",
  dataset: "production",
  apiVersion: "2024-10-8",
  useCdn: false,
};

const client = createClient(config);

export default client;