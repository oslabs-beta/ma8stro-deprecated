 //import * as cmd from 'node-cmd';
const cmd = require('node-cmd')

const getLogs = async () =>{

    const rawLogs = cmd.runSync('kubectl get events --all-namespaces')
      .data.split('\n');
    //const formattedLogs = formatLogs(rawLogs);
    console.log(rawLogs)

}

const prometheusURL = 'http://127.0.0.1:9090/api/v1/';

const getAlerts = async () => {
    const response = await fetch(`${prometheusURL}/rules`)
    const data = await response.json()
    const result = data.data.groups
    console.log(result[0].name)

    const addHere = document.getElementById("alerts")
    addHere.innerText=`Source: ${result[0].name} , Alert: ${result[0].rules[0].name}, State: ${result[0].rules[0].state} `
    // ${data.rules[0].name}, ${data.rules[0].status}
}

document.addEventListener("DOMContentLoaded", (e) => {
    // getLogs()
    getAlerts()
    console.log("dom loaded")
})