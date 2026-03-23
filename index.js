import activityFetch from "./functions/activityFetch.js"
import checker from "./functions/judge.js"

const username = process.argv.slice(2).join(" ")



const data = await activityFetch(username)
console.log(data[0].type)