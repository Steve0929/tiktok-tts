let config, createAudioFromText, getConfig;

describe('index.js test suite', () => {
  beforeEach(() => {
    jest.resetModules();
    ({ config, createAudioFromText, getConfig } = require('tiktok-tts'));
  });

  test('Test get default BASE_URL', async () => {
    const currentConfig = getConfig();
    expect(currentConfig?.BASE_URL).toBe('https://api16-normal-v6.tiktokv.com/media/api/text/speech/invoke');
  });

  test('Test get BASE_URL after passing custom url', async () => {
    const tiktokSessionId = "my_tiktokSessionId";
    const customURL = "https://my-custom-url.com"
    config(tiktokSessionId, customURL);
    const currentConfig = getConfig();
    expect(currentConfig?.BASE_URL).toBe(customURL);
  });

  test('Test get tiktokSessionId without setup', async () => {
    const currentConfig = getConfig();
    expect(currentConfig?.tiktokSessionId).toBe(null);
  });

  test('Test get tiktokSessionId after setup', async () => {
    const tiktokSessionId = "my_tiktokSessionId";
    config(tiktokSessionId);
    const currentConfig = getConfig();
    expect(currentConfig?.tiktokSessionId).toBe(tiktokSessionId);
  });

  test('Test no tiktokSessionId setup', async () => {
    await expect(async () => {
      await createAudioFromText('Text to be spoken goes here');
    }).rejects.toThrow();
  });

  test('Test invalid sessionid', async () => {
    config('Invalid TikTok sessionid here');
    await expect(async () => {
      await createAudioFromText('Text to be spoken goes here');
    }).rejects.toThrow();
  })
})