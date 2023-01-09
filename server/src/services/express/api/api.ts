import express = require("express");
import { login } from "./login/login"


const api = express()

api.use("/login", login)

export { api }