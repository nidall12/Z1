const headersMap = {
    brave: {
        ":method": "GET",
        ":authority": Math.random() < 0.65
            ? parsedTarget.host
            : (Math.random() < 0.4 ? "www." : Math.random() < 0.3 ? "cdn." : Math.random() < 0.2 ? "img." : "static.") + parsedTarget.host,
        ":scheme": "https",
        ":path": parsedTarget.path +
            (Math.random() < 0.5
                ? `?utm_source=${generateRandomString(5)}&utm_campaign=${generateRandomString(6)}`
                : `?ref=${generateRandomString(6)}&v=${Date.now()}`),

        "sec-ch-ua": `"Brave";v="${Math.floor(124 + Math.random() * 2)}", "Chromium";v="${Math.floor(124 + Math.random() * 2)}"`,
        "sec-ch-ua-mobile": Math.random() < 0.4 ? "?1" : "?0",
        "sec-ch-ua-platform": `"Windows"`,
        "sec-ch-ua-platform-version": Math.random() < 0.5 ? `"10.0.0"` : `"11.0.0"`,
        "sec-ch-ua-full-version-list": `"Brave";v="${Math.floor(124 + Math.random() * 2)}.0.${Math.floor(Math.random() * 5000)}.0", "Chromium";v="${Math.floor(124 + Math.random() * 2)}.0.${Math.floor(Math.random() * 5000)}.0"`,
        "sec-ch-ua-bitness": `"64"`,
        "sec-ch-ua-model": `""`,
        "sec-ch-ua-arch": `"x86"`,

        // ✅ User-Agent modern Brave
        "user-agent": `Mozilla/5.0 (Windows NT ${Math.random() < 0.6 ? "10.0" : "11.0"}; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(124 + Math.random() * 2)}.0.${Math.floor(Math.random() * 5000)}.0 Safari/537.36 Brave/${Math.floor(124 + Math.random() * 2)}.0.0.0`,

        "accept": Math.random() < 0.5 
            ? "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8,application/json;q=0.5"
            : "application/json,application/xhtml+xml;q=0.9,image/avif,image/webp,*/*;q=0.8",

        "accept-language": [
            "en-US,en;q=0.9", "id-ID,id;q=0.9", "fr-FR,fr;q=0.8", 
            "es-ES,es;q=0.7", "de-DE,de;q=0.9", "ja-JP,ja;q=0.8"
        ][Math.floor(Math.random() * 6)],

        "accept-encoding": [
            "gzip, deflate, br", 
            "gzip, deflate, zstd, br", 
            "gzip, br, zstd", 
            "br, gzip"
        ][Math.floor(Math.random() * 4)],

        "referer": [
            "https://www.google.com/", "https://store.steampowered.com/", "https://www.epicgames.com/",
            "https://www.twitch.tv/", "https://discord.com/", "https://www.opera.com/gx",
            "https://www.youtube.com/", "https://twitter.com/", "https://www.instagram.com/",
            "https://www.reddit.com/", "https://www.facebook.com/", "https://www.linkedin.com/",
            "https://www.amazon.com/", "https://www.netflix.com/", "https://www.nvidia.com/",
            "https://www.paypal.com/", "https://news.ycombinator.com/", "https://www.bbc.com/"
        ][Math.floor(Math.random() * 18)],

        "origin": [
            "https://www.opera.com/gx", "https://discord.com", "https://store.steampowered.com", 
            "https://www.twitch.tv", "https://www.google.com", "https://www.reddit.com",
            "https://www.amazon.com", "https://www.nvidia.com", "https://www.netflix.com",
            "https://news.ycombinator.com"
        ][Math.floor(Math.random() * 10)],

        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": Math.random() < 0.6 ? "same-origin" : "cross-site",

        "cache-control": Math.random() < 0.5 
            ? "max-age=0" 
            : "no-cache, no-store, must-revalidate",

        "upgrade-insecure-requests": Math.random() < 0.7 ? "1" : "0",
        "dnt": Math.random() < 0.5 ? "1" : "0",
        "te": "trailers",
        "priority": `"u=0, i"`,
        "ect": ["2g", "3g", "4g", "5g"][Math.floor(Math.random() * 4)],
        "rtt": Math.floor(Math.random() * 500) + 50,
        "downlink": (Math.random() * 10).toFixed(2)
    },