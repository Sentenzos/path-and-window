
//Возвращает объект (или массив) из валидной строки или же возвращает сроку,
//если трансформация не удалась
const stringToObj = (string) => {
  if (typeof string !== "string") return string;
  if (!/{.+}/.test(string) &&
    !/\[.+\]/.test(string)) return string;
  try {
    return eval(`(${string})`);
  } catch {
    return string
  }
};

export default stringToObj;