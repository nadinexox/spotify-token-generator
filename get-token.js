// get-token.js
import fetch from 'node-fetch';

async function getRefreshToken() {
    const clientId = 'b5aa5def8d74432892195089fb9a025b';
    const clientSecret = '0f81f7544d644741940577d405d4aa2a';
    const code = 'AQCeeFU4P1t9KnwtI7ZnUqIDQ9_pqyEG9SvPV9pvqFGGfsHeu2JNuiNnaH0XToW8Tt5K8ZjKmhr-QAvz4osRLs36I2SxOS1gXy2TnsGQnYYrm4mwEdeL06YaMhgVd9mgHYm5E6RzbYy7Bstkp4V-SarlDaQw1qSLN5hNsUep-q6AtGcTiapfhQhtFHnUZ73najuvOu4oxZoLvsb2lB8oMDQLwruCATmXlCh-_5TnXcvzr_Ss1sJTiI8E';

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
