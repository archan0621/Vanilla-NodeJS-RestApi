const http = require('http')

const server = http.createServer((req, res) => {
    console.log(123)
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))