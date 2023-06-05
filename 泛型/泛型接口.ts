//定义接口时, 定义泛型
interface myInterface<T, U> {
  aa: U;
  bb: T;
}
//类型注释时,告诉解释器是什么类型的
let b: myInterface<String, Number> = {
  aa: 1,
  bb: "222",
};
