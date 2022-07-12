function ex(){
    const change = (a,b) =>{
        return a+b
    }
    return {change}
}
const result = ex()
console.log(result.change(1,2))