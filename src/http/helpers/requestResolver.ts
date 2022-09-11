export function requestResolver<T>(promise: Promise<T>) {
  return promise
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}
