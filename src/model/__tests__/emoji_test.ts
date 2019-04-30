import { load } from '../emoji';

describe('Emoji', () => {
  describe('should load all', () => {
    const list = load();
    it('should return 1741 emoji', () => {
      expect(list.length).toEqual(1741);
    });
  });
});
