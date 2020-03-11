const owncond =function(arr){
    return function(val)
    {
        for(let i=0;i<arr.length;i++)
        {
          const conds=arr[i];
          const [pre,trans]=conds;
          if(pre(val))
          {
              return trans(val)
          }
       }
    }
  }
  const x=owncond([
    [(x)=>x===0,()=>'water freezes at 0°C'],
    [(x)=>x===100,()=>'water boils at 100°C'],
    [(x)=>x,temp=>'nothing special happens at ' + temp + '°C']
  ]);
  console.log(x(100));

  // let ownpipe= functions => value =>{
  //   let x=0;
  //     for(let i=0;i<functions.length;i++){
  //        const fun=functions[i];
  //        x=fun(value);
  //       // console.log(x)
  //       value=x;
  //     }  
  //     console.log(functions[functions.length-1](x))
  // } 

  ownpipe=function(functions){
    return function(value){
      let x=0;
      for(let i=0;i<functions.length;i++){
         const fun=functions[i];
         x=fun(value);
        // console.log(x)
        value=x;
      }  
    console.log(x)
    }
  }  
ownpipe([(value)=>{
  let sum=0;
    for(let i=0;i<value.length;i++){
      sum=sum+value[i];
    }
    return sum;
},(value)=>10*value])([1,3])