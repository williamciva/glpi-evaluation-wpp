import express = require("express");
import { token } from "./token"


const login = express()

login.use("/token", token)

export { login }