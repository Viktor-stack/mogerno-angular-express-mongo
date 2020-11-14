const app = require('./app')

const PORT = process.env.POST || 5000

app.listen(PORT, () => console.log(`Server has bean started URL ==> http://localhost:${PORT}`))
