export function manageFriends(state = { friends: []}, action){
    if (action.type === "ADD_FRIEND") {
        return {...state, 
                friends: [
                    ...state.friends, 
                    action.friend
                ]
        }
    }
    else if (action.type === "REMOVE_FRIEND") {
        const removedFriend = state.friends.findIndex(friend => friend.id === action.id)
        return {...state, 
                friends: [
                    ...state.friends.slice(0, removedFriend),
                    ...state.friends.slice(removedFriend + 1)
                ]    
        }
    }
    else {
        return state;
    }

}
