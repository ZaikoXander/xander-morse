import decoder from "./src/decoder.js"
import encoder from "./src/encoder.js"
import morseDictionary from "./src/morseDictionary.js"
import morseExtension from "./src/morseExtension.js"

export const decodeMorse = (morseCode) => decoder(morseDictionary, morseCode, morseExtension)

export const encodeMorse = (message) => encoder(morseDictionary, message, morseExtension)
