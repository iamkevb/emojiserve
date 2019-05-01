import { load } from "../emoji";

describe("Emoji", () => {
  describe("should load all", () => {
    const list = load();
    it("should return 1740 emoji", () => {
      expect(list.length).toEqual(1740);
    });
    it("should contain no nils", () => {
      const bads = list.filter(e => {
        return e.emoji === null || e.emoji === undefined;
      });
      expect(bads.length).toEqual(0);
    });
  });
});
