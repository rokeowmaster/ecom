import { groq } from "next-sanity";
import client from "@/lib/client";

export async function getProduct() {
  return client.fetch(
    groq`*[_type == "product"]`
  );
}

export async function getBannerData() {
    return client.fetch(
      groq`*[_type == "banner"]`
    );
  }