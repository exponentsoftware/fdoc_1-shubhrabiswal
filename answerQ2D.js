function checkUniqueness(arrOne){
    for(let ele of arrOne){
      ct = 0;
      for(let ele2 of arrOne){
        if(ele == ele2){
          ct++
        }
      }
      if(ct > 1){
        return false
      }
    }
    return true
  }
  const arrOne = [1, 4, 6, 2, 1];
  console.log(checkUniqueness(arrOne));