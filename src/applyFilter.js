const applyFilter = (array, filter, type) => {
  
  (type === "encode" || type === "decode") && (() => {
  // if `type` is valid run this arrow function
  for (let index = 0; index < array.length; index++) {
    for (const [key, value] of Object.entries(filter)) {
      if (type === "encode") {
        if (array[index] === value) {
          array[index] = key
        }
      }
      else {

        if (array[index] === key) {
          array[index] = value
        }
      }
    }
  }})()
  
  return array
}

export default applyFilter
