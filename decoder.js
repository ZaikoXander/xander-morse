const decoder = (dictionary, code) => {
  // a model that even if "dictionary" change still works
  // but the code still needs to be separated in spaces " " <--
  
  let codeArray = code.split(" ")

  for (let index = 0; index < codeArray.length; index++) {
    codeArray[index] = dictionary[codeArray[index]]  
  }

  code = codeArray.join("")

  return code
}

export default decoder
