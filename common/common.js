FS.debug = true; // enable CFS debug logging

// default GET request headers
FS.HTTP.setHeadersForGet([
  ['Cache-Control', 'public, max-age=31536000']
]);

// GET request headers for the "any" store
FS.HTTP.setHeadersForGet([
  ['foo', 'bar']
], 'any');