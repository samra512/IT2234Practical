

//Reset parameter
const mysum = (...n) =>{
	console.log(n)
}
mysum(4,5,6,85,2)


//Reset sum parameter
const mynumsum =(...n) =>{
	let t=0
	n.forEach((i)=>
	t=t+i)
	console.log(t)
}
mynumsum(1,2,3)

const mynums =(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mynums(4,5,6))
