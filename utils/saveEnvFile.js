const fs = require('fs');

export function saveEnvFile(file) {
  fs.appendFile('.env', file, (err) => {
    if (err) {
      console.error('Error writing to .env:', err);
    } else {
      console.log('Email address added to .env');
    }
  });
}
