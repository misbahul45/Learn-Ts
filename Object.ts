type UserAcc={
    readonly _id:string,
    name:string,
    age:number
    email:string,
    isActive:boolean,
}

interface User{
    name:string,
    email:string,
    isActive:boolean
}

const user:User={
    name:"Misbahul",
    email:"misbahulmuttaqin395@gmail.com",
    isActive:true
}

const userAcount:UserAcc={
    _id:"takin123",
    name:"Misbahul",
    age:19,
    email:"misbahulmuttaqin395@gmail.com",
    isActive:true
}



const data=({nameProduct, price,}):{ nameProduct:string,price:number }=>{
    return {nameProduct,price}
}

console.log(data({nameProduct:"Kerupuk najiha",price:2000}))


function createUser(userAcount:UserAcc){
 
}

export {}
