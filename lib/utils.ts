import { env } from "@/env";

export function mergeApiUrl(url: string) {
    return env.API_URL + url;
}