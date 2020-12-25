import { TodoDao } from './todo.dao';

describe('TodoDao', () => {
  it('should be defined', () => {
    expect(new TodoDao()).toBeDefined();
  });
});
