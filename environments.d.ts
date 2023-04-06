declare global {
    export namespace NodeJS {
        interface ProcessEnv {
            YOUTUBE_API_KEY: string;
        }
    }
}

export {};