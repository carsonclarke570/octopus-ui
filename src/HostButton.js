import React from 'react';

class HostButton extends React.Component {
    
    render() {
        const url = new URL('https://accounts.spotify.com/authorize');
        url.searchParams.append('client_id', 'd85f7cf27fea462498777339f76c038b');
        url.searchParams.append('response_type', 'code');
        url.searchParams.append('redirect_uri', 'http://localhost:5000/');
        url.searchParams.append('scope', 'user-library-read');
    
        return (
            <a href={url.href}>Log In</a>
        );
    }
};

export default HostButton;