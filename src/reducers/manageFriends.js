export function manageFriends(state = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
            state.friends.push(action.friend)
            return { friends: state.friends}

        case 'REMOVE_FRIEND':
            const new_friends = state.friends.filter(friend => friend.id != action.id)
            return { friends: new_friends}

        default:
            return state
    }
    
}