export default function checker (data){
    console.log(data[0].type)
    data.forEach(element => {
        console.log(element.type)
    });
}
