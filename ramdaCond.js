let obj={
    id:2,
    name:"GAYATHRI"
}
function pretic(num,str,obj){
    if(obj.id===num)
    {
            obj.name=obj.name+str;
            console.log(obj)
    }
}

pretic(2,"2",obj)