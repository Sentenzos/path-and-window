
//Принимает строку и переводит в другой тип
export const typeFromStr = (value) => {
  if (typeof value !== "string") return value;

  const string = value.split(' ').
  filter(i => i).join(" ");

  switch (true) {
    case string === "false":
      return false;

    case string === "true":
      return true;

    case string === "null":
      return null;

    case string === "undefined":
      return undefined;

    case !isNaN(string):
      return +string;

    default:
      return string;
  }
};


//Принимает объект items, строковые значения которого переводит в тругой тип
//и массив ключей которые следует пропустить (keys)
export const typeFromStrMany = (items, keys) => {
  let obj = {};

  Object.entries(items).forEach((item) => {
    const [key, value] = item;

    if (keys.find(k => k === key)) {
      obj = {
        ...obj,
        [key]: value
      };
      return
    }

    obj = {
      ...obj,
      [key]: typeFromStr(value)
    }
  });

  return obj;
};