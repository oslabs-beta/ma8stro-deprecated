"use strict";
console.log("hello");
const coreCount = document.getElementById("cores");
//@ts-expect-error
coreCount === null || coreCount === void 0 ? void 0 : coreCount.innerText = `Core Count: ${api.threads}`;
