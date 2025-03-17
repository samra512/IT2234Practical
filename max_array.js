
//find the max number in the array
let max=a[0]
for(i=0;i<a.length;i++){
	max<a[i]
	max=a[i]
}
console.log("max:"+max)

//foreach
array.forEach((n)=>{
	if(max<n){
		max=n
	}
})
console.log("max:"+max)

//forEach
array.forEach((n)=>{
	(max<n) && (max=n)
})
console.log("max:"+max)
