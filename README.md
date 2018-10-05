# imgur-anti-anti-hotlink
A very simple WebExtension to prevent Imgur from preventing you from viewing images directly.

Currently, when you visit an image URL directly, the image is still displayed inside an HTML document. This viewing mode even requires JavaScript to function! This is not ideal.

Setting the `Accept` header to `*/*` causes Imgur to serve the raw image file, restoring the UX to some semblance of sanity.
