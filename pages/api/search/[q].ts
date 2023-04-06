import { NextApiHandler } from "next";
import { youtubeApi } from "@youtube-api";
import { YouTubeVideo, YoutubeVideoRequest } from "@youtube-api/types";

const handler : NextApiHandler = async (req, res) => {
    const { q } = req.query;
    const response = await youtubeApi.get<YoutubeVideoRequest[]>("/search", {
        params: {
            q,
        }
    });
    const youTubeVideos = response.data.map<YouTubeVideo>((yVideo) => {
        const liveBroadcastContent = yVideo.snippet.liveBroadcastContent;
        return {
            id: yVideo.id.videoId,
            channelTitle: yVideo.snippet.channelTitle,
            description: yVideo.snippet.description,
            title: yVideo.snippet.title,
            publishedAt: yVideo.snippet.publishedAt,
            publishTime: yVideo.snippet.publishTime,
            thumbnails: yVideo.snippet.thumbnails,
            isLive: liveBroadcastContent !== "none" ? true : false
        };
    });
    console.log(youTubeVideos);
    res.status(201).json(youTubeVideos);
};

export default handler;