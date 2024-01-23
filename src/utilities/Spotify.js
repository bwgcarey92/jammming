const Spotify = {
    accessToken: '',
    tokenExpirationTime: 0,
    apiEndpoint: 'https://api.spotify.com/v1',
    clientId: '9f6beb44350c43a1a5e813a071e3cb9a',
    redirectUri: 'http://localhost:3000/callback',
    scopes: ['user-read-private', 'playlist-modify-public'],
    getAccessToken() {
        if(this.accessToken) {
            return this.accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            this.accessToken = accessTokenMatch[1];
            this.tokenExpirationTime = Date.now() + expiresInMatch[1] * 1000;

            window.history.pushState('Access Token', null, '/');
            return this.accessToken;
        } else {
            const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}&scope=${this.scopes.join('%20')}`;
            window.location = authorizeUrl;
        }
    },

    isAccessTokenValid() {
        return this.accessToken && Date.now() < this.tokenExpirationTime;
    },

    async request(url, method = 'GET', body = null) {
        const headers = {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        };
    
        try {
          const response = await fetch(`${this.apiEndpoint}${url}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
          });
    
          if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
          } else {
            throw new Error('Request failed');
          }
        } catch (error) {
          console.error('Error making Spotify API request:', error);
        }
      },
    
      
      getUserProfile() {
        return this.request('/me');
      },
    
    
      searchTracks(query) {
        return this.request(`/search?type=track&q=${query}`);
      },
    };
    
    export default Spotify;
