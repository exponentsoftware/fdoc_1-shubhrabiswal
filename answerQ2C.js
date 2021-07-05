function reverseArray(arr){
    const ar1 =[]
    for(let i=arr.length-1;i>=0;i--){
      ar1.push(arr[i])
     }
    return ar1
  }
  console.log(reverseArray(["A", "B", "C"]));