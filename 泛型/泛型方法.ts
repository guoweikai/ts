//第一种
function getUserInfo<T>(name: T): void {
  console.log(name);
}
//传递字符串
getUserInfo<String>("1111");
//第二种
let getUserInfo1 = function <T>(name: T): void {};
//传递 number
getUserInfo1<Number>(11111);

let getUserInfo2 = <T>(name: T): void => {};
getUserInfo2([1]);
// 传递数组
getUserInfo2<Array<Number>>([1, 2, 3]);
//传递map
let m1 = new Map();
m1.set("key", "value");
getUserInfo2<Map<String, any>>(m1);
//传递Set
getUserInfo2<Set<string>>(new Set(["1"]));
//传递 Promise  尖括号里边是 返回值的类型
const promise = Promise.resolve("哈哈");
getUserInfo2<Promise<String>>(promise);
//传递函数
getUserInfo2<Function>(() => {});
//传递对象
getUserInfo2<Object>({});
getUserInfo2(10)
