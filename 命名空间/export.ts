/*
 * @Author: your name
 * @Date: 2023-05-29 10:46:36
 * @LastEditTime: 2023-05-29 10:53:18
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /typescript/命名空间/export.ts
 */
namespace MyNamespace {
  // 定义接口
  export interface MyInterface {
    name: string;
    age: number;
  }

  // 定义类型别名
  export type MyType = {
    id: number;
    value: string;
  };

  // 定义枚举
  export enum MyEnum {
    Option1,
    Option2,
    Option3,
  }
}

export default MyNamespace;
