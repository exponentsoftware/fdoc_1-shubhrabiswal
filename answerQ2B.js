function sevenRandomNumbers(){
    const ar1 =[]
    while(ar1.length<7){
      const value = Math.floor(Math.random()*9)
      if(ar1.includes(value)==false){
      ar1.push(value)
     }
    }
    return ar1
  }
  console.log(sevenRandomNumbers());