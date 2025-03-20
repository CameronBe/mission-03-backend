const app = require("./app");
require("dotenv").config();

const port = process.env.SERVER_PORT || 4000; // defaults to port 4000

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
