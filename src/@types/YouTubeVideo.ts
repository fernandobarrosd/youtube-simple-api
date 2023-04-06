import { YouTubeVideoThumbnail } from "./YouTubeVideoThumbail";

export interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    isLive: boolean;
    channelTitle: string;
    publishTime: string;
    thumbnails: {
        default: YouTubeVideoThumbnail;
        medium: YouTubeVideoThumbnail;
        high: YouTubeVideoThumbnail;
    }
};