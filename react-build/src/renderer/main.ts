console.log("hello")

const coreCount = document.getElementById("cores")

//@ts-expect-error
coreCount?.innerText = `Core Count: ${api.threads}`;