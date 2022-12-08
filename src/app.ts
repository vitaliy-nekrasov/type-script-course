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

// Опишите enum условие следующее, он должен отображать статус загрузки.
// Загружается(LOADING) и загружена(READY).
enum IsLoading {
  LOADING,
  READY,
}
const image = {
  isLoading: IsLoading.READY,
};
if (image.isLoading === IsLoading.READY) {
  console.log("IsLoading: ", IsLoading.READY, "Изображение загрузилось");
}
if (image.isLoading === IsLoading.LOADING) {
  console.log("IsLoading: ", IsLoading.LOADING, "Изображение загружается");
}

// Сделайте переменную, которая может принимать или строку или число.
let personAge: string | number;
personAge = 10;
personAge = "10";

// Сделайте переменную, которая может принимать только одно значение из двух 'enable'
// или 'disable'
let darkThemeIsEnable: "enable" | "disable";
darkThemeIsEnable = "enable";
darkThemeIsEnable = "disable";

// Укажите типы для следующих функций
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Создайте свой тип данных на основе имеющихся данных.
type DataType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: DataType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: DataType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
