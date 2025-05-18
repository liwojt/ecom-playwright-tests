import * as fs from 'fs';

export function saveEnvFile(file: string) {
  fs.appendFile('.env', file, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error('Error writing to .env:', err);
    } else {
      console.log('Email address added to .env');
    }
  });
}
