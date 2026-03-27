export default async function activityFetch (user){
    try {
        const activity = await fetch(`https://api.github.com/users/${user}/events`)
        const data = await activity.json()
        if(data.length > 0){console.log(data)}
        else{console.log("Username Invalid")}
        
    } catch (error) {
        console.error("Username not valid." + error)
    }
}