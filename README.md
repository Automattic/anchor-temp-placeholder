This extension provides temporary placeholder UI on http://anchor.fm to facilitate end-to-end testing of flows leading from anchor.fm into WPCOM.

# To Install Extension

- Check out this repository locally.
- Create a file called `config.json` in the root of the extension folder and set key-value pairs for `PODCAST_ID`, `EPISODE_ID`, and `SPOTIFY_URL`. (A sample is provided in `config.sample.json`). The `config.json` file is not monitored by Git, so it will remain consistent if you make further pulls from the extension repository.
  - The `SPOTIFY_URL` property is optional and can be set to an empty string, or removed, in order to avoid passing it as a parameter to WPCOM.
- In Chrome, navigate to chrome://extensions
- Toggle "Developer Mode" on if it is not already enabled.
- Click "Load Unpacked" and select the container folder of the repository.
- If you need to make changes to the extension, you will have to click the "Refresh" button on the `chrome://extensions` page before they will be reflected in the browser.

# To Use Extension

- Navigate to http://anchor.fm and log into an account that has at least one episode created.
- While on the dashboard, click the extension icon to toggle the "Create a site and transcribe episodes" banner.

![dashboard behavior](https://cdn-std.droplr.net/files/acc_1037067/rKmG8R)

- While on an episode page, click the extension icon to toggle the "Convert to blog post" link

![episode behavior](https://cdn-std.droplr.net/files/acc_1037067/3WaN1k)
