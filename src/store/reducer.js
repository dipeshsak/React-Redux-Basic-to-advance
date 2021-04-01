const initialState ={
    age:5,
}

const  reducer =(state=initialState,action)=>{
    const newState ={...state};
    
    switch (action.type) {
        case "INC":
           newState.age++;
           break;
        case "DEC":
            newState.age--;
          break;
    }

    // if(action.type==="INC"){
    //     newState.age++
    // }
    return newState

}

export default reducer