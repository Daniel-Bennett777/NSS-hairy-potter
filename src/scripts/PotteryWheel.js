let primaryKey = 1;

export const makePottery = (shape, weight, height) => {
  const pottery = {
    shape,
    weight,
    height,
    id: primaryKey,
  };

  primaryKey++;

  return pottery;
}

