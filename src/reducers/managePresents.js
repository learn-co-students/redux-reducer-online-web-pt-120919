let state = {numberOfPresents: 0 }
let type = {type: "INCREASE"}
export function managePresents(state, action){
    switch(action.type){
        case "INCREASE":
            return{
                numberOfPresents: state.numberOfPresents + 1
                }
                default: return state
    }
}
