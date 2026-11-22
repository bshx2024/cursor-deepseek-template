/**
 * Test APIVALE DeepSeek Gateway Connection
 * Usage: node scripts/test-connection.js
 */
const https = require('https');

const API_KEY = process.env.OPENAI_API_KEY || 'sk-your-key-here';
const API_BASE = 'https://apivale.com/v1/chat/completions';

if (API_KEY === 'sk-your-key-here') {
  console.log('[Notice] Set OPENAI_API_KEY environment variable or edit the script to test.');
}

const payload = JSON.stringify({
  model: 'deepseek-chat',
  messages: [
    { role: 'system', content: 'You are a test ping agent. Answer in one sentence.' },
    { role: 'user', content: 'Verify connection and report model identity.' }
  ],
  max_tokens: 60,
  temperature: 0.2
});

const url = new URL(API_BASE);
const options = {
  hostname: url.hostname,
  port: 443,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log(`Connecting to ${API_BASE}...`);
const start = Date.now();

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const elapsed = Date.now() - start;
    console.log(`HTTP Status: ${res.statusCode} (${elapsed}ms)`);
    try {
      const json = JSON.parse(data);
      if (res.statusCode === 200) {
        console.log('\n[DeepSeek Response]:');
        console.log(json.choices[0].message.content);
        console.log(`\nTokens Used: ${json.usage?.total_tokens || 'N/A'}`);
      } else {
        console.log('API Error:', json);
      }
    } catch (e) {
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('Request failed:', e.message);
});

req.write(payload);
req.end();
