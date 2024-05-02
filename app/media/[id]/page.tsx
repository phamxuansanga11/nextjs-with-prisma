import PageContainer from "@/src/components/PageContainer";
import VideoPlayer from "@/src/components/VideoPlayer";
import React from "react";
// import '../../../src/uploads/video-free.mp4'

const MediaPage = ({ params }: { params: { id: string } }) => {
  return (
    <PageContainer>
      <VideoPlayer videoUrl="/uploads/video-free.mp4" />
    </PageContainer>
  );
};

export default MediaPage;
