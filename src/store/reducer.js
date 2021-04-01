const initialState ={
    age:5,
    ageHistory:[]
}

const  reducer =(state=initialState,action)=>{
    const newState ={...state};
    
    switch (action.type) {
        case "INC":
          return{
              ...state,
             age:state.age+action.val,
             ageHistory:state.ageHistory.concat({id:Math.random(),age:state.age+action.val})
          }
          break;
        case "DEC":
            return{
             ...state,
             age:state.age > 0 ?state.age-action.val :0,
             ageHistory:state.ageHistory.concat({id:Math.random(),age:state.age > 0 ?state.age-action.val :0})
             }
             break;
        case "HIS_DEC":
             return{
              ...state,
                  ageHistory:state.ageHistory.filter(el=> el.id !== action.key)
                 }
                break;
    }

    // if(action.type==="INC"){
    //     newState.age++
    // }
    return newState

}

export default reducer