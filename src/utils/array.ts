export const sortDesc = (items: Array<any>, prop: string) =>
  (items || []).sort((a: any, b: any) =>
    b[prop] > a[prop] ? 1 : a[prop] > b[prop] ? -1 : 0
  );
