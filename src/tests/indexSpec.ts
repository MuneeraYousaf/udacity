import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing image  processing Endpoints', () => {
  it('Testing if api is exist', async () => {
    const response: supertest.Response = await request.get('/');

    expect(response.status).toBe(200);
  });
  it('Testing if fjords is not exist', async () => {
    await request.get('/images?filename=fjords').expect(404);
  });
  describe('endpoint: /images', (): void => {
    it('gets /images?filename=fjord', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/images?filename=fjord'
      );

      expect(response.status).toBe(200);
    });

    it('gets /images?filename=fjord&width=299&height=299', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/images?filename=fjord&width=199&height=199'
      );

      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /hoo', (): void => {
    it('returns 404 for invalid endpoint', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/hoo');

      expect(response.status).toBe(404);
    });
  });
});
