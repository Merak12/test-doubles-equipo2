import { getUserName } from "../doubles/stub";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'Stub User' })
  })
);

test('getUserName devuelve el nombre del stub', async () => {
  const name = await getUserName();
  expect(name).toBe('Stub User');
});