// get-token.js
import fetch from 'node-fetch';

async function getRefreshToken() {
    const clientId = 'CLIENT_ID';
    const clientSecret = 'CLIENT_SECRET';
    const code = 'CODE';

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'https://localhost:3000/callback'
            })
        });

        const data = await response.json();
        console.log('Response:', data);
        
        if (data.refresh_token) {
            console.log('\nYour refresh token is:', data.refresh_token);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

getRefreshToken();