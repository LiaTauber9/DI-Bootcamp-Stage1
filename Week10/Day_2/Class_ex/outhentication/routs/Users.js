import express from "express";
import { getUsers, register,login, logOut, token } from "../controlers/Users.js";

const users_router = express.Router();

users_router.get('/users', getUsers);
users_router.post('/register', register);
users_router.post('/login', login);
users_router.delete('/logOut', logOut);
users_router.get('/token', token);

export default users_router