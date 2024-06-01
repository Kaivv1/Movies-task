export const useGetRows = <T>(array: T[]) => {
  const rows: Array<T[]> = [];

  for (let i = 0; i < array.length; i += 4) {
    const row = array.slice(i, i + 4);
    rows.push(row);
  }
  return { rows };
};
