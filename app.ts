// Задайте правильные ts типы, для классических js
let age: number = 50;
let nameValue: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any = -20;
anything = "Text";
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
// let person = ['Max', 21];
let person: [string, number];
person = ["Max", 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Loading {
  LOADING,
  READY,
}
const image = {
  isLoading: Loading.READY,
};
if (image.isLoading === Loading.READY) {
  console.log("IsLoading: ", Loading.READY);
}

// Сделайте переменную, которая может принимать или строку или число.
let personAge: string | number;
personAge = 10;
personAge = "10";

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let darkThemeIsEnable: "enable" | "disable";
darkThemeIsEnable = "enable";
darkThemeIsEnable = "disable";
