//write recursive function to print number from 1 to n


function Numbers(n)
{
	if(n == 0)
	{
		return 1
	}
	else
	{
		Numbers(n-1)
		console.log(n)
	}	
}

Numbers(5)
