const kalkulator=() : object=>{
    const obj={
        add:(num1: number,num2: number):number=>{
            return num1+num2
        },
        minus:(num1: number,num2: number):number=>{
            return num1-num2
        },
        multiple:(num1: number,num2: number):number=>{
            return num1*num2
        },
        divided:(num1: number,num2: number):number=>{
            return num1/num2
        }
    }
    return obj
}

const getUpperCase=(val: string) : string=>{
    return val.split('').map((a,index)=>{
        if(index==0){
           return a.toUpperCase()
        }else{
            return a
        }
    }).join('')
}

const signUpUser=(name:string, email:string,isPaid:boolean)=>{}

console.log(getUpperCase("hallo"))












export {}