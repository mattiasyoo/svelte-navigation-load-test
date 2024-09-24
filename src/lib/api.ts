
export const loadItems = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const items = []

      for (let index = 0; index < 100; index++) {
        items.push({
          name: `Name ${index}`
        })
      }

      resolve(items)
    }, 4000);
  })
}
