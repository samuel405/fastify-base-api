import dotenv from 'dotenv'
dotenv.config()

export const PORT = Number(process.env.PORT) || 3000
export const HOST = process.env.HOST || '0.0.0.0'

export const DB_HOST = process.env.DB_HOST || ''
export const DB_NAME = process.env.DB_NAME || ''
export const DB_USER = process.env.DB_USER || ''
export const DB_PASS = process.env.DB_PASS || ''
export const DB_MIN_POOL = Number(process.env.DB_MIN_POOL) || 2
export const DB_MAX_POOL = Number(process.env.DB_MAX_POOL) || 10

export const JWT_SECRET = process.env.JWT_SECRET || ''

export const ENV = process.env.ENV || 'development'
