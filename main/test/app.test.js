const assert = require("assert");
const compress = require("../app.js");

describe("test compression", function () {
  it("returns empty string", function () {
    assert.strictEqual(compress("", true), "");
  });
  it("returns a4b5c2d4", function () {
    assert.strictEqual(compress("aaaabbbbbccdddd", true), "a4b5c2d4");
  });
  it("throws an exception", function () {
    assert.throws(() => compress([], true), { message: "InvalidType" });
  });
  it("returns aaabbbbccc", function () {
    assert.strictEqual(compress("a3b4c3", false), "aaabbbbccc");
  });
  it("returns abcdd", function () {
    assert.strictEqual(compress("abcdd"), "a1b1c1d2");
  });
  it("String with same character appearing twice", function () {
    assert.strictEqual(compress("aaaabbbbcccaa"), "a4b4c3a2");
  });
  it("Compresses more than 9 digits", function () {
    assert.strictEqual(compress("aaaaaaaaaaaaabbbbcccaa"), "a13b4c3a2");
  });
  it("Decompresses more than 9 digits", function () {
    assert.strictEqual(compress("a13b4c3a2", false), "aaaaaaaaaaaaabbbbcccaa");
  });
});
