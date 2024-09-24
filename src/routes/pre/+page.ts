import { browser } from "$app/environment";
import { loadItems } from "$lib/api";

export async function load() {
  if (browser) {
    return {
      items: loadItems()
    };
  } else {
    return {
      items: await loadItems()
    };
  }
}
