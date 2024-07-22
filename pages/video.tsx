import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Mock data
const videoData = [
  {
    id: 1,
    title: "CSS Animations Tutorial",
    duration: 15,
    videoUrl: "https://youtu.be/YszONjKpgg4?si=oDFEZR7yEMS0KFKD",
    timeStamps: [
      "00:00 - Introduction",
      "01:22 - Transition Property",
      "06:20 - Animation Property",
    ]
  },
  {
    id: 2,
    title: "React Hooks Explained",
    duration: 20,
    videoUrl: "https://youtu.be/example2",
    timeStamps: [
      "00:00 - Introduction to Hooks",
      "03:45 - useState Hook",
      "10:30 - useEffect Hook",
    ]
  },
];

const VideoCard = ({ video, isActive, onClick }:any) => (
  <div 
    className={`mb-4 p-4 rounded-lg shadow cursor-pointer ${isActive ? 'bg-blue-100' : 'bg-white'}`}
    onClick={onClick}
  >
    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
    <p>Duration: {video.duration} minutes</p>
  </div>
);

const Sidebar = ({ videos, activeVideoId, setActiveVideoId }: any) => (
  <div className="w-1/4 p-4 bg-gray-100">
    {videos.map((video:any) => (
      <VideoCard
        key={video.id}
        video={video}
        isActive={video.id === activeVideoId}
        onClick={() => setActiveVideoId(video.id)}
      />
    ))}
  </div>
);

const MainContent = ({ video }:any) => (
  <div className="w-3/4 p-4">
    <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
    <div className="aspect-w-16 aspect-h-9 mb-4">
    <div className="relative w-full player-wrapper" key={video.id}>
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          url={video.videoUrl}
          className="react-player absolute top-0 left-0"
        />
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2">Timestamps:</h3>
    <ul className="list-disc pl-5">
      {video.timeStamps.map(({timestamp, index}:any) => (
        <li key={index} className="mb-1">{timestamp}</li>
      ))}
    </ul>
  </div>
);

const DetailPage = () => {
  const router = useRouter();
  const [activeVideoId, setActiveVideoId] = useState(1);

  // Update URL when active video changes
  useEffect(() => {
    router.push(`/video/?v=${activeVideoId}`, undefined, { shallow: true });
  }, [activeVideoId, router]);

  // Update active video when URL changes
  useEffect(() => {
    const { id } = router.query;
    console.log(id)
    if (id) {
      setActiveVideoId(Number(id));
    }
  }, [router.query]);

  const activeVideo = videoData.find(video => video.id === activeVideoId) || videoData[0];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        videos={videoData}
        activeVideoId={activeVideoId}
        setActiveVideoId={setActiveVideoId}
      />
      <MainContent video={activeVideo} />
    </div>
  );
};

export default DetailPage;