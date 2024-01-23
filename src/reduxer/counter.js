

let initilize = {
  user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [],
  users: {}
}

const reducer = (state = initilize, action) => {


  switch (action.type) {
    case "adduser":

      let ans = [...state.user, action.payload]

      localStorage.setItem("user", JSON.stringify(ans))

      return {
        ...state,
        user: ans
      }

    case "viewuser":
      return state

    case "removeuser":
      let id = action.payload
      let remove = state.user.filter((val) => {
        return val.id !== id
      })

      localStorage.setItem("user", JSON.stringify(remove))

      return {
        ...state,
        user: remove
      }
    case "edituser":
      let single = state.user.find((val) => {
        return val.id === action.payload
      })
      console.log(single);
      return {
        ...state,
        user: single
      }

    case "updateuser":
      let userid = action.payload
      let update = state.user.map((val) => {
        if (userid === val.id) {
          return {
            ...val,
            email: action.payload.email,
            password: action.payload.password
          }
        }
        return val
      })
      console.log(update);
      localStorage.setItem("user", JSON.stringify(update))

      return {
        ...state,
        users: update
      }
    default:
      return state
  }

}

export default reducer