const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const pipe = (source, target) => {
  return new Promise((resolve, reject) => {
    source.pipe(target)
    source.on('finish', resolve);
    source.on('error', reject);
  })
}

module.exports = base => ({
  fetch: async (url, ...refs) => {
    const res = await fetch(`${base}/fetch`, {
      method: 'POST',
      body: new URLSearchParams({ url, refs })
    });
    return pipe(res.body, process.stdout);
  },

  refs: async (...refs) => {
    const res = await fetch(`${base}/refs`, {
      method: 'POST',
      body: new URLSearchParams({ refs })
    });
    return pipe(res.body, process.stdout);
  }
});