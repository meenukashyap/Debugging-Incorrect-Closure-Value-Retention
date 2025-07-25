function createfunctionlist()
{
    let list=[]
    for(let i=0;i<5;i++)
    {
        list.push(function()
            {
                console.log("index:",i)
            
             }
            );
    }
    
    return list
}
const element=createfunctionlist();
element[0]();
element[1]();
element[2]();
element[3]();
element[4]();