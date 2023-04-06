import axios from "axios";
import { config } from "dotenv";
config();

const { YOUTUBE_API_KEY } = process.env;

export const youtubeApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        key: YOUTUBE_API_KEY
    }
});