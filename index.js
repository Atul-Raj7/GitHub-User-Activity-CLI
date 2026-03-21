const username = process.argv.slice(2).join(" ")

// async function events (username){
//     try {
//         const activity = await fetch(`https://api.github.com/users/${username}/events`)
//         console.log(activity[3])
        
//     } catch (error) {
//         console.log(error)
//     }
// }

const lol = fetch(`https://api.github.com/users/${username}/events`)
console.log(lol)
