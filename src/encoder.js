import applyFilter from "./applyFilter.js"

const encoder = (dictionary, message, extension = null) => {
  // this is a model that even if "dictionary" change still works

  const msgArray = message.toUpperCase().split("")
  // split the code in little separated parts to work one at a time

  if (extension) {
    applyFilter(msgArray, extension, "encode")
  }
  
  applyFilter(msgArray, dictionary, "encode")

  message = msgArray.join(" ")
  // transform the array into a string

  return message
}

export default encoder
