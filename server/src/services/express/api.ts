import { satisfaction } from "./satisfaction"
import express = require("express");

const api = express()

api.use("/satisfaction", satisfaction)

export { api }