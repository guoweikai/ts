/*
 * @Author: your name
 * @Date: 2023-05-24 17:17:01
 * @LastEditTime: 2023-05-24 17:28:46
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /typescript/泛型/泛型的继承.ts
 */
interface inter {
  age: Number;
}

// 泛型可以继承 接口,也可以继承其他类型

function fn2<T extends { age: number }>(a: T) {}
fn2<{ name: string; age: number }>({ age: 111,name:'weikai' });
