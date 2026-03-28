import activityFetch from "./functions/activityFetch.js"
import judge from "./functions/judge.js"
import print from "./functions/print.js"

const username = process.argv.slice(2).join(" ")



const rawData = await activityFetch(username)

if (Array.isArray(rawData)) {
    const finalData = judge(rawData)
    print(finalData)
}
else if (rawData.status === "404") {
    console.log("Not Found. 404 Error.")
}
else {
    console.log("Unexpedcted error occured.")
}