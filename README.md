This extension provides temporary placeholder UI on http://anchor.fm to facilitate end-to-end testing of flows leading from anchor.fm into WPCOM.

# To Install Extension

- Check out this repository locally.
- In Chrome, navigate to chrome://extensions
- Toggle "Developer Mode" on if it is not already enabled.
- Click "Load Unpacked" and select the container folder of the repository.
- If desired, update the `SITE_ROOT`, `PODCAST_ID`, `EPISODE_ID`, and `SPOTIFY_URL` values in `onExtensionControlClick.js`, then click the "Refresh" button on the extension page. (Use this "Refresh" button any time you make changes to the content of the extension.)

# To Use Extension

- Navigate to http://anchor.fm and log into an account that has at least one episode created.
- While on the dashboard, click the extension icon to toggle the "Create a site and transcribe episodes" banner.
- While on an episode page, click the extension icon to toggle the "Convert to blog post" link
