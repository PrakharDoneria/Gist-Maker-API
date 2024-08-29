const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/create-gist', async (req, res) => {
    const { fileName, code, accessToken } = req.body;

    if (!fileName || !code || !accessToken) {
        return res.status(400).json({ error: 'Missing required fields: fileName, code, or accessToken' });
    }

    try {
        const response = await axios.post(
            'https://api.github.com/gists',
            {
                files: {
                    [fileName]: {
                        content: code
                    }
                },
                public: true
            },
            {
                headers: {
                    'Authorization': `token ${accessToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        res.json({ gist_url: response.data.html_url });
    } catch (error) {
        console.error('Error creating gist:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to create gist' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
