export default async function activityFetch(user) {

    const activity = await fetch(`https://api.github.com/users/${user}/events`)
    const data = await activity.json()

    if (!data) {
        console.log("Username Invalid")
    }
    else {
        return data
    }
}