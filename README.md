# tiktok-tts

This package provides a simple way to generate text-to-speech audio files from TikTok's text-to-speech (TTS) API in Node.js.

## Installation
```javascript
npm i tiktok-tts
```

## Usage

### Basic example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok Session Id here');
createAudioFromText('Text to be spoken goes here', 'filename');
```

## Get TikTok Session id

## Available functions
```javascript
config(TikTokSessionId)
```
| Parameter     | Description             | Default   |type |
| ------------- |:-------------           | -----    |-----|
| TiktokSessionId| Your TikTok Session id | ```null``` | String|


```javascript
createAudioFromText(text, fileName, speaker)
```

| Parameter     | Description | Default  |  type |
| ------------- |:-------------| -----| -----|
| text | Text to be converted to audio | ```null``` | String|
| fileName | filename/path for the generated audio file ```optional``` | ```audio``` | String|
| speaker | TikTok speaker code ```optional``` | ```en_us_001``` | String|

## Language Codes
The following language codes are supported:

