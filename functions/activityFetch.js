export default async function activityFetch (user){
    try {
        const activity = await fetch(`https://api.github.com/users/${user}/events`)
        const data = await activity.json()
        // console.log(data[0].type)
        return data
        
    } catch (error) {
        console.log(error)
    }
}