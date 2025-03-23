/* global process */
import dotenv from 'dotenv';
dotenv.config();

export const serverUrl = process.env.SERVER_URL;
export const validNames = JSON.parse(process.env.SECRET_ARRAY);
export const bigPages = JSON.parse(process.env.SECRET_ARRAY);
