// //变量的使用
// let num: number = 123;
// console.log(123);
// let str: string = '123';
// console.log(str);


// //函数的使用
// function sum(a: number, b: number): number {
//   return a + b;
// }
// let result = sum(123, 456);
// console.log(result);


// //可以使用 | 来连接多个类型 (联合类型)

// let b: "male" | "female";
// b = "male";
// b = "female";
// // b = "123" //这是不行的

// let c: boolean | string;
// c = true;
// c = 'hello';

// //any 表示的是任意类型, 一个变量设置类型为 any 后相当于对该变量关闭TS的类型检测, 使用TS时, 不建议使用 any 类型。

// let d: any;
// d = 10;
// d = "hello";
// d = true;

// //如果变量后面不加 any, 会自动加上。
// let f;
// f = 10;
// f = "hello";
// f = true;

// //unknown 表示未知类型的值

// let e: unknown;
// e = 10;
// e = "hello";
// e = true;

// //unknown 不能把定义好的类型赋值给 unknown 的变量
// let s: string = '123';
// // s=e; //报错

// // unknown 实际上就是一个类型安全的any
// // unknown 类型的变量，不能直接赋值给其他变量

// //解决报错 s = e 的办法, 赋值前进行类型检测
// if (typeof e === "string") {
//   s = e;
// }

// //类型断言, 可以用来告诉解析器变量的实际类型, 也可以解决 s = e 报错
// s = e as string;
// s = <string>e;

// // void 用来表示空, 一函数为例, 就表示没有返回值的函数, 但可以返回 undefined
// function fn(): void {
//   return undefined;
// }

// // never 表示永远不会返回结果
// function fn2(): never {
//   throw new Error("报错了! ");
// }

// // object 表示一个 js 对象
// let a: object;
// a = {};
// a = function () {

// }

// // {} 用来指定对象中可以包含哪些属性
// // 语法：{属性名:属性值, 属性名:属性值}
// // 在属性名后边加上?, 表示属性是可选的

// let g: { name: string, age?: number };
// g = { name: '孙悟空', age: 18 };

// // [propName: string]: any
// let h: { name: string, [propName: string]: any }
// h = { name: '猪八戒', age: 18, gender: '男' };

// // 设置函数结构的类型声明

// let j: (a: string, b: string) => number;
// j = function (n1: string, n2: string): number {
//   return 10;
// }

// // string 表示字符串数组
// let v: string[];
// v = ['a', 'b', 'c'];

// //number[] 表示数值
// let w: number[];
// w = [1, 2, 3];

// let m: Array<number>;
// m = [1, 2, 3];

//元组就是固定长度的数组

let h: [string, number]; //可以写多个类型
h = ['hello', 123];

// enum 枚举

enum Gender {
  Male,
  Female
}

let i: { name: string, gender: Gender };
i = {
  name:'孙悟空',
  gender:Gender.Male 
}

console.log(i.gender === Gender.Male);

