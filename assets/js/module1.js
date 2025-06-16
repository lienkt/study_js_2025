// export no default
export const firstName = 'tony';

export function sum(x, y) {
  return x + y
}

/* export default
- 1 file js nó chỉ có 1 export default
*/
export default function getFirstName() {
  return firstName
}