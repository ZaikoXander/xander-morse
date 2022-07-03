import applyFilter from "./applyFilter.js"

const decoder = (dictionary, code, extension = null) => {
  // a model that even if "dictionary" change still works
  // but the code still needs to be separated in spaces " " <--
  
  const codeArray = code.split(" ")
  // split the code in little separated parts to work one at a time
  
  applyFilter(codeArray, dictionary, "decode")

  if (extension) {
    applyFilter(codeArray, extension, "decode")
  }

  code = codeArray.join("")
  // transform the array into a string

  return code
}

export default decoder
