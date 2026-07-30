import React from 'react';

const PlaylistCard = ({ playlistName, creator, songCount }) => {
  return (
    <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', maxWidth: '350px', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginTop: 0, color: '#333' }}>{playlistName}</h2>
      <p style={{ color: '#666', margin: '8px 0' }}>Created by: <strong>{creator}</strong></p>
      <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
        <span>🎵</span>
        <span>{songCount} songs</span>
      </div>
    </div>
  );
};

export default PlaylistCard;
