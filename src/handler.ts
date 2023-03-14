import { Router } from 'itty-router';

import Posts from './handlers/posts';

const router = Router();

router
  .get('/', Posts)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = request => router.handle(request);
