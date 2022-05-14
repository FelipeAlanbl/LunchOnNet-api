const express = require('express');
const Routes = require('./Routes')
const cors = require('cors')

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('/api', Routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})