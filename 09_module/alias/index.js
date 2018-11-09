// エイリアス(alias)
import {
  add as myAdd,
  sub as mySub,
  someone as guy
} from './add';

let value = myAdd(3, 2);
console.log(value);

let value2 = mySub(3, 2);
console.log(value2);

console.log(guy);
