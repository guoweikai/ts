/*
 * @Author: your name
 * @Date: 2023-05-24 16:39:03
 * @LastEditTime: 2023-05-24 17:27:30
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /typescript/泛型/泛型类.ts
 */

class MyClass<T> {
  age: T;
  constructor(age: T) {
    this.age = age;
  }
}
//第一种写法
var mc1: MyClass<String> = new MyClass("111");
//第二种写法:
var mc2 = new MyClass<number>(1111);
