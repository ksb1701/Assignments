import { useState, useEffect } from 'react';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching YouTube video data
    const fetchVideos = () => {
      setTimeout(() => {
        setVideos([
          { id: 1, title: 'Learn React in 10 Minutes' },
          { id: 2, title: 'JavaScript Promises Explained' },
          { id: 3, title: 'CSS Flexbox Crash Course' }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchVideos();
  }, []);

  return { videos, loading };
};
