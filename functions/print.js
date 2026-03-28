export default function print(finalData) {
    console.log("\n")
    finalData.forEach(item => {
        if (item.event === "PushEvent") {
            console.log(`Pushed ${item.count} commits in ${item.repo}`)
        }
        else if (item.event === "PullRequestEvent") {
            console.log(`PR opened/closed ${item.count} times in ${item.repo}`)
        }
        else if (item.event === "PullRequestReviewEvent") {
            console.log(`Review submitted on PR in ${item.repo}`)
        }
        else if (item.event === "PublicEvent") {
            console.log(`${item.repo} visibitlity changed`)
        }
        else if (item.event === "PullRequestReviewCommentEvent") {
            console.log(`Comment on PR Review in ${item.repo}`)
        }
        else if (item.event === "IssuesEvent") {
            console.log(`Issue Opened/Closed ${item.count} times in ${item.repo}`)
        }
        else if (item.event === "IssueCommentEvent") {
            console.log(`Comment on issue ${item.repo}`)
        }
        else if (item.event === "CreateEvent") {
            console.log(`Branch/Repo Created in ${item.repo}`)
        }
        else if (item.event === "DeleteEvent") {
            console.log(`Branch/Tag Deleted in ${item.repo}`)
        }
        else if (item.event === "ForkEvent") {
            console.log(`${item.repo} Repo forked`)
        }
        else if (item.event === "WatchEvent") {
            console.log(`Starred ${item.repo}`)
        }
        else {
            console.log(`Outside the scope of Core Event Type.`)
        }
    })
    console.log("\n")
}