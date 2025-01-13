# Spotify Token Utility

A simple Node.js utility for obtaining Spotify API refresh tokens.

## Description

This utility helps developers obtain refresh tokens from the Spotify Web API. It's particularly useful during the OAuth2.0 authentication flow when setting up Spotify API integrations.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)
- A Spotify Developer account with registered application

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Configuration

Before using the utility, you need to:

1. Register your application in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Get your `Client ID` and `Client Secret`
3. Set up your redirect URI in the Spotify Dashboard (default: https://localhost:3000/callback)
4. Update the following variables in `get-token.js`:
   - `clientId`
   - `clientSecret`
   - `code` (obtained from the initial OAuth flow)

## Usage

Run the utility with:

```bash
node get-token.js
```

The script will make a request to Spotify's API and output your refresh token if successful.

## Dependencies

- node-fetch: ^3.3.2

## Security Note

⚠️ Never commit your actual Client ID, Client Secret, or tokens to version control. Consider using environment variables for sensitive data in production environments.

## License

ISC 