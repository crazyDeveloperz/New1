import React from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <VideoPlayer
        videoUrl="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
        websiteUrl="https://www.example.com"
        websiteLabel="Visit Website"
      />
    </div>
  );
}

export default App;