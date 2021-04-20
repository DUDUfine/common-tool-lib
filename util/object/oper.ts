
// 移除数组中指定值
export const remove = <T>(arr: T[], el: T) => {
  const i = arr.indexOf(el)
  if (i > -1) {
    arr.splice(i, 1)
  }
}


// 比较一个值是否改变，包括NaN
export const hasChanged = (value: any, oldValue: any): boolean =>
  value !== oldValue && (value === value || oldValue === oldValue)

  
export const def = (obj: object, key: string | symbol, value: any) => {
  Object.defineProperty(obj, key, {
    configurable: true, // 该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
    enumerable: false, //该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中
    value
  })
}


  // 工程中this指向
  let _globalThis: any
  export const getGlobalThis = (): any => {
    return (
      _globalThis ||
      (_globalThis =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
              ? window
              : typeof global !== 'undefined'
                ? global
                : {})
    )
  }