
//callback function
//a function passed as an argument
const greet =(msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greet("Good morning",()=>console.log("My name is David"))

const multwo = (n)=>n*3
const myarr =(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)