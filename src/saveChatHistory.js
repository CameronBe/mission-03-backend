import * as fs from 'node:fs/promises';


/** date +%Y%m%d_%H%M%S
 * Generates the prompt for the AI based on interview context
 * @param {string} jobTitle - The position being interviewed for
 * @param {Array} messageHistory - Previous conversation history
 * @param {string} sessionID - Timestamp 

 */
// function saveChatHistory(jobTitle, messageHistory, sessionID) {
 const saveChatHistory = (jobTitle, messageHistory, sessionID) => {
  if (typeof jobTitle == "undefined") {
    return {
      error: `jobTitle == "undefined". Derka.`,
    };
  }
  
  const questionCount = messageHistory.filter(
    (messageHistoryItem) => messageHistoryItem.role === "model"
  ).length;

  const file = path.join(__dirname, sessionID + ".log")
  
  fsPromises.open(file);
  fs.writeFileSync(file, messageHistory); // write to disk
  console.log("log was saved: "  , file);
  return `Saved to ${file}`;
}
export default saveChatHistory;
