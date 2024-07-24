import { TextEncoder, TextDecoder } from 'node:util';
import { Request, Response, fetch } from 'cross-fetch';

Object.defineProperties(globalThis, {
  TextEncoder: { value: TextEncoder },
  TextDecoder: { value: TextDecoder },
  Request: { value: Request },
  Response: { value: Response },
  fetch: { value: fetch, writable: true },
});

global.performance.getEntriesByType = () => [];
