import decoder from "./decoder.js"
import morseDictionary from "./morseDictionary.js"

export const decodeMorse = (morseCode) => {

  return decoder(morseDictionary, morseCode)
}

export const encodeMorse = (message) => {

  // return encoder(morseDictionary, message)
}
