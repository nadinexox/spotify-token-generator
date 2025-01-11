// get-token.js
import fetch from 'node-fetch';

async function getRefreshToken() {
    const clientId = '3764500d720b4a1ea9628f19ebb2f540';
    const clientSecret = '620dd1be5df847569825f660b6f69f23';
    const code = 'AQAhjDwZLGsfY0e7VDdU1iYenApaLvjInzFynr-449Gzg92IJsOcAVaMsJ92vIXDVbdg-YhH-OVDhk9S7QY_AGmRykNoQN9qhYiS9LGlWBXrh0G4KEBZGLyRlNgXPvVSm9x3NDTw8G4EI3CNbOigFx0NJVyIoSY_tAh3PyZlyWBRL3GrZxvQhSNCl2NTvb6ypdZqO1ulKky-XfdzuJ2fNg-xOZWLo_WSJ-mckbuoII8HPKwUa4Zc8BRU';

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