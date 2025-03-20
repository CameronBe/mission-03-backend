import fs from 'fs';
import path from 'path';

/**
 * Logs the session start time and job title
 * @param {string} jobTitle - The position being interviewed for
 * @returns {string} sessionID - The generated session ID
 */
const sessionLogger = (jobTitle) => {
  const sessionID = new Date().toISOString().replace(/[:.]/g, '-');
  const logFilePath = path.join(__dirname, `${sessionID}.log`);

  const logData = `Session started for job title: ${jobTitle}\n`;
  fs.writeFileSync(logFilePath, logData);

  return sessionID;
};

export default sessionLogger;

