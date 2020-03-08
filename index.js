exports.owncond =function(arr){
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

exports.ownpipe= functions => value =>{
    let x=0;
      for(let i=0;i<functions.length;i++){
         const fun=functions[i];
         x=fun(value);
        console.log(x)
        value=x;
      }  
    return functions[functions.length-1](x)
  } 