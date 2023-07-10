export const findOwnedIds = (my, another) => my
  .filter(({ id }) => {
    const match = another.find((wish) => wish.id === id);
    return !!match;
  })
  .map(({ id }) => id);

export const pluckEmptyFormFields = (object) => Object.entries(object).reduce((res, [k, v]) => {
  if (v === '') return res;
  res[k] = v;
  return res;
}, {});
