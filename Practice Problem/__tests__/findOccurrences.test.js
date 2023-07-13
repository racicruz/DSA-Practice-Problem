const findOccurrences = require("../src/findOccurrences");
const index = require("../src/index");
const LinkedList = require("../src/lib/linkedList");
const data = require("../src/data");

describe("Search Lines", () => {
  let idx = {};
  beforeAll(() => {
    idx = index(data);
  });
  
  it("should return empty list when empty list is given", () => {
    const words = new LinkedList();
    expect(findOccurrences(words, idx, data)).toEqual([]);
  })
  
  it("should return empty list if words are not present in index", () => {
    const words = new LinkedList(["dumbledore"]);
    expect(findOccurrences(words, idx, data)).toEqual([]);
  })
  
  it("should return a single line if word appears on one line", () => {
    const words = new LinkedList(["unanimous"]);
    expect(findOccurrences(words, idx, data)).toEqual(["The unanimous Declaration of the thirteen united States of America."]);
  })
  
  it("should return non duplicated lines", () => {
   
    const words = new LinkedList(["human", "object", "history"]);
    expect(findOccurrences(words, idx, data)).toEqual([
      "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Natures God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.",
      "But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.",
      "The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States.",
    ]);
  });
});