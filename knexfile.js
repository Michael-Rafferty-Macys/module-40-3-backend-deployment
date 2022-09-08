const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://eutalwym:Sa3wzV12yNxe5_gYSB4t-7hn2NWSn82a@jelani.db.elephantsql.com/eutalwym",
  },
};




