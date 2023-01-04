import express = require("express");
import { satisfaction } from "./satisfaction"
import { login } from "./login"


const api = express()

api.use("/satisfaction", satisfaction)
api.use("/login", login)

export { api }