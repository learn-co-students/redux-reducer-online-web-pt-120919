export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      let newFriend = action.friend;
      let friends = [...state.friends];
      friends.push(newFriend) 
      return {friends: friends};
    case "REMOVE_FRIEND": 
      return {friends: state.friends.filter(f => f.id !== action.id)};
    default: 
      return {friends: state.friends};
  }
}
