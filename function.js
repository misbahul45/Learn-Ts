"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kalkulator = function () {
    var obj = {
        add: function (num1, num2) {
            return num1 + num2;
        },
        minus: function (num1, num2) {
            return num1 - num2;
        },
        multiple: function (num1, num2) {
            return num1 * num2;
        },
        divided: function (num1, num2) {
            return num1 / num2;
        }
    };
    return obj;
};
var getUpperCase = function (val) {
    return val.split('').map(function (a, index) {
        if (index == 0) {
            return a.toUpperCase();
        }
        else {
            return a;
        }
    }).join('');
};
var signUpUser = function (name, email, isPaid) { };
console.log(getUpperCase("hallo"));
