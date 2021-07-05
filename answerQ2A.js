function triangle(steps){
  for(let i = 0;i<steps;i++){
    let str1 = ''
    for(let j=0;j<=i;j++){
      str1=str1+"#"
    }
    console.log(str1)
  }
}
triangle(7);




