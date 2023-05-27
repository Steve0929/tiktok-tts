# tiktok-tts 

This package provides a simple way to generate text-to-speech audio files from TikTok's text-to-speech (TTS) API in Node.js.

![example workflow](https://github.com/Steve0929/tiktok-tts/actions/workflows/publish_workflow.yml/badge.svg)
## Installation
```javascript
npm i tiktok-tts
```

## Usage

### Basic example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here');
```

### Custom filename example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here', 'myAudio');
```
Generated audio file will be saved as ```myAudio.mp3```

### Custom path example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here', './myDirectory/myAudio');
```
Generated audio file will be saved as ```myAudio.mp3``` inside the ```myDirectory``` directory.
###### ⚠️ Please keep in mind that ```myDirectory``` needs to be an existing directory.

### Custom voice example
```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');
createAudioFromText('Text to be spoken goes here', 'myAudio', 'en_us_stormtrooper');
```

### Using ```await``` with the ```createAudioFromText()``` function

```javascript
const { config, createAudioFromText } = require('tiktok-tts')

config('Your TikTok sessionid here');

async function yourFunction(){
    await createAudioFromText('Text that will be spoken');
    console.log("Audio file generated!");
}

yourFunction();
```

## Get TikTok Session id 🍪
- Install [Cookie Editor extension](https://cookie-editor.cgagnier.ca) for your browser.
- Log in to [TikTok Web](https://tiktok.com)
- While on TikTok web, open the extension and look for ```sessionid```
- Copy the ```sessionid``` value. (It should be an alphanumeric value)

## Available functions
```javascript
config(tiktokSessionId, customBaseUrl)
```
| Parameter     | Description             | Default   |type |
| ------------- |:-------------           | ------------------    |-----|
| tiktokSessionId| Your TikTok sessionid | ```null``` | String|
| customBaseUrl| Custom TikTok API url ```optional```  | ```-``` | String|

* ```https://api16-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke``` will be used if no customBaseUrl is specified.

<br/>

```javascript
createAudioFromText(text, fileName, speaker)
```

| Parameter     | Description | Default  |  type |
| ------------- |:-------------| -----| -----|
| text | Text to be converted to audio | ```null``` | String|
| fileName | filename/path for the generated audio file ```optional``` | ```audio``` | String|
| speaker | TikTok speaker code ```optional``` | ```en_us_001``` | String|

## Speaker Codes
The following speaker codes are supported:

| Language    | Speaker                    | Speaker Code                  |
|-------------|----------------------------|-------------------------------|
| English     | English AU - Female        | en_au_001                     |
|             | English AU - Male          | en_au_002                     |
|             | English UK - Male 1        | en_uk_001                     |
|             | English UK - Male 2        | en_uk_003                     |
|             | English US - Female (Int. 1) | en_us_001                   |
|             | English US - Female (Int. 2) | en_us_002                   |
|             | English US - Male 1        | en_us_006                     |
|             | English US - Male 2        | en_us_007                     |
|             | English US - Male 3        | en_us_009                     |
|             | English US - Male 4        | en_us_010                     |
|             | Narrator                   | en_male_narration             |
|             | Funny                      | en_male_funny                 |
|             | Peaceful                   | en_female_emotional           |
|             | Serious                    | en_male_cody                  |
| Disney      | Ghost Face                 | en_us_ghostface               |
|             | Chewbacca                  | en_us_chewbacca               |
|             | C3PO                       | en_us_c3po                    |
|             | Stitch                     | en_us_stitch                  |
|             | Stormtrooper               | en_us_stormtrooper            |
|             | Rocket                     | en_us_rocket                  |
|             | Madame Leota               | en_female_madam_leota         |
|             | Ghost Host                 | en_male_ghosthost             |
|             | Pirate                     | en_male_pirate                |
| French      | French - Male 1            | fr_001                        |
|             | French - Male 2            | fr_002                        |
| Spanish     | Spanish (Spain) - Male     | es_002                        |
|             | Spanish MX - Male          | es_mx_002                     |
| Portuguese  | Portuguese BR - Female 1   | br_001                        |
|             | Portuguese BR - Female 2   | br_003                        |
|             | Portuguese BR - Female 3   | br_004                        |
|             | Portuguese BR - Male       | br_005                        |
| German      | German - Female            | de_001                        |
|             | German - Male              | de_002                        |
| Indonesian  | Indonesian - Female        | id_001                        |
| Japanese    | Japanese - Female 1        | jp_001                        |
|             | Japanese - Female 2        | jp_003                        |
|             | Japanese - Female 3        | jp_005                        |
|             | Japanese - Male            | jp_006                        |
| Korean      | Korean - Male 1            | kr_002                        |
|             | Korean - Female            | kr_003                        |
|             | Korean - Male 2            | kr_004                        |
| Other       | Alto                       | en_female_f08_salut_damour    |
|             | Tenor                      | en_male_m03_lobby             |
|             | Sunshine Soon              | en_male_m03_sunshine_soon     |
|             | Warmy Breeze               | en_female_f08_warmy_breeze    |
|             | Glorious                   | en_female_ht_f08_glorious     |
|             | It Goes Up                 | en_male_sing_funny_it_goes_up |
|             | Chipmunk                   | en_male_m2_xhxs_m03_silly     |
|             | Dramatic                   | en_female_ht_f08_wonderful_world |
