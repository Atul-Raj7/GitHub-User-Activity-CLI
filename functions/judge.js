export default function checker(data) {
    const myActivity = []
    data.forEach(element => {
        const exist = myActivity.find(item => item.id === element.repo.id && item.event === element.type)

        if (exist) {
            exist.count++
        }
        else {
            myActivity.push({
                id: element.repo.id,
                event: element.type,
                count: 1,
                repo: element.repo.name
            })
        }
    });
    return myActivity
}