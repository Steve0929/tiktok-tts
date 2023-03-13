const axios = require("axios");
const BASE_URL = 'https://api16-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke';


async function createAudioFromText(text, path) {
    const req_text = prepareText(text);
    const URL = `${BASE_URL}/?text_speaker=${speaker}&req_text=${req_text}&speaker_map_type=0&aid=1233`;
    const headers = {
        'User-Agent': 'com.zhiliaoapp.musically/2022600030 (Linux; U; Android 7.1.2; es_ES; SM-G988N; Build/NRD90M;tt-ok/3.12.13.1)',
        'Cookie': `sessionid=${tiktokSessionId}`,
        'Accept-Encoding': 'gzip,deflate,compress'
    }
    const result = await axios.post(URL, null, { headers: headers });
    const encoded_voice = result?.data?.data?.v_str;
    fs.writeFileSync(`${fileName}`, Buffer.from(encoded_voice, 'base64'));
}

function prepareText(text) {
    text = text.replace("+", "plus");
    text = text.replace(/\s/g, "+");
    text = text.replace("&", "and");
    return text;
}

module.exports = createAudioFromText