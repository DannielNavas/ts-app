// Daniel => ['D', 'a', 'n', 'i', 'e', 'l'] => string => string[]
// ['D', 'a', 'n', 'i', 'e', 'l'] => Daniel => string[] => string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // ['D', 'a', 'n', 'i', 'e', 'l'] => Daniel
  }
  return input.split(''); // Daniel => ['D', 'a', 'n', 'i', 'e', 'l']
}

const rta = parseString('Daniel');
// TODO: hasta inferir el tipo de dato de rta no se puede aplicar funciones sobre él en este caso array
if (Array.isArray(rta)) {
  rta.reverse();
}
console.log(rta);
const rta2 = parseString(['D', 'a', 'n', 'i', 'e', 'l']);
if (typeof rta2 === 'string') {
  rta2.toUpperCase();
}
console.log(rta2);
