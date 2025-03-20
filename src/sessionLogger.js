import * as fs from 'node:fs/promises';
// import path from 'node:path';
import * as path from 'path'
// import path from "node:path";
/**
 * Generates timestamp like 20250306_110627 for use as session ID 
 * @param {string} jobTitle - The position being interviewed for
 * @param {string} userMessage - The latest message from the candidate
 * @param {Array} messageHistory - Previous conversation history
 */

let sessionID = 0;

function timestamp() {
  const time = new Date();
  const stamp = `${time.getFullYear()}${time.getMonth()}${time.getDate()}_${time.getHours()}${time.getMinutes()}${time.getSeconds()}`;
  console.log(`Timestamp: ${stamp}`);
  return stamp;
}
function sessionLogger(jobTitle) {
// } const sessionLogger = (jobTitle) => {
    if (jobTitle.length < 5) {
        console.error("Invalid job title");
        return;
    }
    console.log(`Job Title: ${jobTitle}`);
    const ts = timestamp();
    const file = path.join(__dirname, ts + ".log")
    fs.writeFileSync(file, ts); // write timestamp to disk 
    return ts;
};

export default sessionLogger;

