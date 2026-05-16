"use strict";
// Exclude<U, V> -> remove from U those member assinable to V
// Extract<U, V> -> keep from U those members assiable to V
// Nonnullable
function handleEvent1(e) {
    console.log(e);
}
function handleEvent2(e) {
    console.log(e);
}
function square(num) {
    return num * 2;
}
square(10);
// square(null)
