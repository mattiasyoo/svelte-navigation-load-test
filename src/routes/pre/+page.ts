import { loadItems } from "$lib/api";

export async function load() {
  return {
    items: loadItems()
  };
}
