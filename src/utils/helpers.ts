/* eslint-disable @typescript-eslint/no-explicit-any */
export async function handlePromises(
  asyncFunction: (params?: any) => Promise<any>,
  ...params: any
): Promise<{ result?: any; error?: Error }> {
  return asyncFunction(...params)
    .then((result) => ({ result }))
    .catch((error) => ({ error }));
}
