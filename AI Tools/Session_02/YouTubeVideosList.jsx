import React from 'react';
import { useVideos } from './useVideos';

const YouTubeVideosList = () => {
  const { videos, loading } = useVideos();

  if (loading) return <p>Loading trending videos...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Trending YouTube Videos</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {videos.map(video => (
          <li 
            key={video.id} 
            style={{ padding: '12px', borderBottom: '1px solid #eee', marginBottom: '8px' }}
          >
            🎥 {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeVideosList;
