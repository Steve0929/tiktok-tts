# tiktok-tts

This package provides a simple way to generate text-to-speech audio files from TikTok's text-to-speech (TTS) API in Node.js.

## Installation
```javascript
npm i tiktok-tts
```

## Usage
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok Session Id here');
createAudioFromText('Text that will be spoken here', 'filename');
```

## Language Codes
The following language codes are supported:

