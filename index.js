import activityFetch from "./functions/activityFetch.js"
import checker from "./functions/judge.js"
import print from "./functions/print.js"

const username = process.argv.slice(2).join(" ")



const rawData = await activityFetch(username)
const finalData = checker(rawData)
print(finalData)