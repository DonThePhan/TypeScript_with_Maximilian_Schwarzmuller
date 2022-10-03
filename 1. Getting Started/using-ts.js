/**
 * 1. in this version of the 'js-only' we have a few changes - 'as HTMLInput', ':number'
 * 2. TS also checks our types and picks up type errors before we even compile it so we can make the necessary changes.
 * TS also detects all the modules as a whole and will detect if variables names are being redeclared, etc.
 *
 * 3. To COMPILE to vanilla JS, we use the command 'tsc' <ts file>
 *
 */
var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
