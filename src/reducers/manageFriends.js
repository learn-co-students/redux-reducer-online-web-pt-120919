export function manageFriends(state = {friends: []}, action){
  switch(action.type){
    case "ADD_FRIEND":
      return(
        { 
          ...state,
          friends: [
            ...state.friends,
            action.friend
            ]
        }
      )
      
    case "REMOVE_FRIEND":
      console.log("======================================")
      console.log("======ORIGINAL=======")
      console.log(state)
      console.log("======FRIEND=======")
      console.log(action.id)
      
      
      var arr = state.friends;
      for( var i = 0; i < arr.length; i++){
        if ( arr[i].id === action.id) { 
          arr.splice(i, 1); 
          i--; 
        }
      }
      console.log("======MODIFIED=======")
      console.log(
        { 
          ...state,
          friends: arr
        }
            
      )
      console.log("======ORIGINAL=======")
      console.log(state)
      return (
         { 
          ...state,
          friends: arr
        }
      )
      
      default:
        return state
  }
}
