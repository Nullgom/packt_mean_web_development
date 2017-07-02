/*
 - ES6 방식의 모듈 불러오기 아직 지원 하지 않음.
 import doSomething form 'doSomething';
 doSomethin();
*/
import { halfOf, multiply } from './lib';
console.log(halfOf(84));
console.log(multiply(21, 2));

import { flag, touch } from 'validator';
console.log(flag);
touch();
console.log(flag);