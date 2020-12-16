const redis = require('redis')

const client = redis.createClient({
    port: 6379,
    host: "127.0.0.1"
})

client.on('connect', () => {
    console.log("Redis client connected")
})

client.on('ready', (err) => {
    console.log('Redis client ready')
})

client.on('error', (err) => {
    console.log(err.message)
})

client.on('end', () => {
    console.log('Redis client disconnected')
})

process.on('SIGINT', () => {
    client.quit()
})

module.exports = client