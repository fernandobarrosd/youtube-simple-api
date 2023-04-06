import { YouTubeVideoThumbnail } from "./YouTubeVideoThumbail";

export interface YoutubeVideoRequest {
    id: {
        videoId: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        channelTitle: string;
        publishTime: string;
        liveBroadcastContent: string;
        thumbnails: {
            default: YouTubeVideoThumbnail;
            medium: YouTubeVideoThumbnail;
            high: YouTubeVideoThumbnail;
        }
    }
}