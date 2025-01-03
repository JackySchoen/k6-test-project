import http from "k6/http";
import { sleep } from "k6";

export const options = {
    vus: 5,
    iterations: 10
}

export default function() {
    const res = http.get("http://localhost:3000");

    console.log(`response status: ${res.status}`);

    sleep(1);
}

export function handleSummary(data) {   
    const timestamp = (new Date()).toISOString().replace(/:/g, '-');
    const filename = `./summary/${timestamp}_summary.json`;
    
    return {
        [filename]: JSON.stringify(data, null, 4),
    };
}