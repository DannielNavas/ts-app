// Daniel => ['D', 'a', 'n', 'i', 'e', 'l'] => string => string[]
// ['D', 'a', 'n', 'i', 'e', 'l'] => Daniel => string[] => string

// TODO: sobre carga, solo tipo de dato a retornar y no el tipo de dato de entrada
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // ['D', 'a', 'n', 'i', 'e', 'l'] => Daniel
//   }
//   return input.split(''); // Daniel => ['D', 'a', 'n', 'i', 'e', 'l']
// }

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // ['D', 'a', 'n', 'i', 'e', 'l'] => Daniel
  } else if (typeof input === 'string') {
    return input.split(''); // Daniel => ['D', 'a', 'n', 'i', 'e', 'l']
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const rta = parseString('Daniel');
rta.reverse();
// TODO: hasta inferir el tipo de dato de rta no se puede aplicar funciones sobre él en este caso array
// if (Array.isArray(rta)) {
//   rta.reverse();
// }
console.log(rta);
const rta2 = parseString(['D', 'a', 'n', 'i', 'e', 'l']);
rta2.toUpperCase();
// if (typeof rta2 === 'string') {
//   rta2.toUpperCase();
// }
console.log(rta2);

const rta3 = parseString(10);
console.log(rta3);
