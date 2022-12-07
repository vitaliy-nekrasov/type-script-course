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
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Loading;
(function (Loading) {
    Loading[Loading["LOADING"] = 0] = "LOADING";
    Loading[Loading["READY"] = 1] = "READY";
})(Loading || (Loading = {}));
var image = {
    isLoading: Loading.READY
};
if (image.isLoading === Loading.READY) {
    console.log("IsLoading: ", Loading.READY);
}
// Сделайте переменную, которая может принимать или строку или число.
var personAge;
personAge = 10;
personAge = "10";
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var darkThemeIsEnable;
darkThemeIsEnable = "enable";
darkThemeIsEnable = "disable";
