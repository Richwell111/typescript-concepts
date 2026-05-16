"use strict";
function getUserN10(obj, key) {
    return obj[key];
}
const userExample = { id: "1", name: "Sangam" };
const extractId = getUserN10(userExample, "id");
