/*
 * @Author: your name
 * @Date: 2023-05-24 16:30:21
 * @LastEditTime: 2023-05-24 17:01:57
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /typescript/泛型/泛型数组.ts
 */

// 泛型数组中要是当做函数的参数

function printArray<T>(arr: Array<T>): void {
  for (const item of arr) {
    console.log(item);
  }
}
printArray([1, 2, 3, 4]);
printArray<number>([1, 2, 3, 4]);

