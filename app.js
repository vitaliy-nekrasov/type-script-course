// Задайте правильные ts типы, для классических js
var age = 50;
var nameValue = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
// Задавайте тип для переменной в которую можно сохранить любое значение.
var anything = -20;
anything = "Text";
anything = {};
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
// let person = ['Max', 21];
var person;
person = ["Max", 21];
// Опишите enum условие следующее, он должен отображать статус загрузки.
// Загружается(LOADING) и загружена(READY).
var IsLoading;
(function (IsLoading) {
    IsLoading[IsLoading["LOADING"] = 0] = "LOADING";
    IsLoading[IsLoading["READY"] = 1] = "READY";
})(IsLoading || (IsLoading = {}));
var image = {
    isLoading: IsLoading.READY
};
if (image.isLoading === IsLoading.READY) {
    console.log("IsLoading: ", IsLoading.READY, "Изображение загрузилось");
}
if (image.isLoading === IsLoading.LOADING) {
    console.log("IsLoading: ", IsLoading.LOADING, "Изображение загружается");
}
// Сделайте переменную, которая может принимать или строку или число.
var personAge;
personAge = 10;
personAge = "10";
// Сделайте переменную, которая может принимать только одно значение из двух 'enable'
// или 'disable'
var darkThemeIsEnable;
darkThemeIsEnable = "enable";
darkThemeIsEnable = "disable";
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
