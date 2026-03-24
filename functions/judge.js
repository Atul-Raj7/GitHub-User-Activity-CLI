let myActivity = []
export default function checker (data){

    data.forEach(element => {
        const exist = myActivity.find(item => item.id === element.repo.id && item.event === element.type)

        if(exist){
            exist.count++
        }
        else{
            myActivity.push({
                id: element.repo.id,
                event: element.type,
                count: 1
            })
        }
    });
    console.log(myActivity)
}