export default class UnitConverter<T extends string> {
  conversionMap: Record<T, Partial<Record<T, number>>>;

  constructor(conversionMap: Record<T, Partial<Record<T, number>>>) {
    this.conversionMap = conversionMap;
  }

  convert(value: number, from: T, to: T, path: T[] = []): number | null {
    const fromLookup = this.conversionMap[from];
    const conversion: undefined | number = fromLookup[to];

    if (conversion) {
      return conversion * value;
    }

    const fromLookupKeys = Object.keys(fromLookup) as T[];

    for (let i = 0; i < fromLookupKeys.length; i++) {
      const fromLookupKey = fromLookupKeys[i];
      const fromLookupValue: undefined | number = fromLookup[fromLookupKey];

      if (!fromLookupValue || path.includes(from)) continue;

      const conversion = this.convert(
        fromLookupValue * value,
        fromLookupKey,
        to,
        path.concat(from)
      );

      if (conversion !== null) return conversion;
    }

    return null;
  }
}
