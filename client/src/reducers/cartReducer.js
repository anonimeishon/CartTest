const cartReducer = (state , action) => {
  let temp=[...state]
  switch (action.type) {
    case "ADD":
      let auxAdd = temp.find(el => el.id === action.payload)
      if (auxAdd){
        return(temp.map((val)=>{
          if(val.id === auxAdd.id){
            return({id:auxAdd.id, count:auxAdd.count+1})            
          }else{return(val)}
        }))
      }else{
        return([...temp,{id:action.payload,count:1}])
      }
    case "REMOVE_ONE":
      let auxDel = temp.find(el=>el.id===action.payload)
      if (auxDel.count>1){

        return(temp.map((val)=>{
          if(val.id === auxDel.id){
            return({id:auxDel.id, count:auxDel.count-1})            
          }else{return(val)}

        }))

      }else{
        return(temp.filter(el=>el.id!==action.payload))
      }

    case "RESTART":
      return [];
    default:
      return temp;
  }
};
export default cartReducer;
