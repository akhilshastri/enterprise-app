// @ts-ignore
export const nest = (items, id = null, link = "parent") =>
  items
    // @ts-ignore
    .filter((item) => item[link] === id)
    // @ts-ignore
    .map((item) => ({ ...item, children: nest(items, item.id) }));
