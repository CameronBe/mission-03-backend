import * as fs from 'node:fs/promises';
import { appendFileSync } from 'node:fs';
import path from 'node:path';
// import saveChatHistory from './saveChatHistory.js';

/** date +%Y%m%d_%H%M%S
 * Generates the prompt for the AI based on interview context
 * @param {string} jobTitle - The position being interviewed for
 * @param {Array} messageHistory - Previous conversation history
 * @param {string} sessionID - Timestamp 
 */

export default function saveChatHistory(data, sessionID) {
  if (typeof data == "undefined") {
    return {
      error: `jobTitle == "undefined". Derka!`,
    };
  }
  if (typeof sessionID == "undefined") {
    return {
      error: `sessionID == "undefined". Derka!`,
    };
  }
  
  const file = path.join(__dirname, sessionID + ".log")
  console.log("about to save: "  , file);
  fsPromises.open(file);

  try {
    appendFileSync(file, JSON.stringify(data)); // append to file
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  } 

  try {
    fs.writeFileSync(file, messageHistory); // write to disk
    console.log("log was saved: "  , file);
  } catch(error){
    console.log("error saving file: "  , error);
  }

  return file;
}
