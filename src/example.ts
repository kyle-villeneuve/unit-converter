import UnitConverter from ".";

// simply pass a graph
const LengthConverter = new UnitConverter({
  ft: {
    in: 12,
  },
  in: {
    ft: 1 / 12,
    cm: 2.54,
  },
  mm: {
    cm: 1 / 10,
    m: 1 / 1000,
  },
  cm: {
    mm: 10,
    m: 1 / 100,
    in: 1 / 2.54,
  },
  m: {
    cm: 100,
    mm: 1000,
  },
});

console.log(
  `5 meters => ${LengthConverter.convert(5, "m", "cm")} centimeters`,
  `3 feet => ${LengthConverter.convert(3, "ft", "m")} meters`
);
