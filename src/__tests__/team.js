import Team from '../team';

test('test add', () => {
  const a = new Team();
  const user1 = { name: 'John' };
  const user2 = { name: 'Jane' };
  a.add(user1);
  let result = a.toArray();
  expect(result).toEqual([user1]);
  a.add(user2);
  result = a.toArray();
  expect(result).toEqual([user1, user2]);
});

test('test add with already added', () => {
  const a = new Team();
  const user1 = { name: 'John' };
  const user2 = { name: 'Jane' };
  a.add(user1);
  a.add(user2);
  expect(() => {
    a.add(user1);
  }).toThrow(Error);
});

test('test addAll with already added', () => {
  const a = new Team();
  const user1 = { name: 'John' };
  const user2 = { name: 'Jane' };
  const user3 = { name: 'Linda' };
  a.add(user1);
  a.add(user2);
  expect(() => {
    a.addAll(user1, user3)
  }).not.toThrow(Error);
  const result = a.toArray();
  expect(result).toEqual([user1, user2, user3]);
});
