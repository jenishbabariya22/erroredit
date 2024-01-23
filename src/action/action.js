export const Adduser = (data) => {
  console.log(data);
  return {
    type: "adduser",
    payload: data
  }
}
export const viewuser = () => {
  return {
    type: "viewuser"
  }
}
export const removeuser = (id) => {
  return {
    type: "removeuser",
    payload: id
  }
}
export const edituser = (id) => {
  return {
    type: "edituser",
    payload: id
  }
}
export const updateuser = (data) => {
  return {
    type: "updateuser",
    payload: data
  }
}