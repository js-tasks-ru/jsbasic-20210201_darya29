function getMinMax(str) {
  let filterNumber = str.split(' ')
    .join()
    .split(',')
    .map((elem) => parseFloat(elem))
    .filter((elem) => isFinite(elem));

  return {
    min: Math.min(...filterNumber),
    max: Math.max(...filterNumber),
  };
}
