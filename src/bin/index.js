import dotenv from 'dotenv';
import debug from 'debug';
import http from 'http';
import path from 'path';
import normalizePort from 'normalize-port';
import app from '..';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const log = debug(process.env.APP_NAME);
const port = normalizePort(process.env.PORT);

const server = http.createServer(app);

server.listen(port);

server.on('error', () => {
  log(`Error while try to run app on port ${process.env.PORT}`);
});
server.on('listening', () => {
  log(`Listening to ${port}`);
});
