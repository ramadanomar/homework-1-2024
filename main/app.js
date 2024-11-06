/**
 * Compresses a string using a simple run-length encoding algorithm.
 *
 * @param {string} data - The string to be compressed.
 * @returns {string} - The compressed string.
 */
const compressString = (data) => {
  if (!data) return "";

  let compressed = "";
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    const currentChar = data[i];
    const nextChar = data[i + 1];

    if (currentChar === nextChar) {
      count++;
    } else {
      compressed += currentChar + count;
      count = 1;
    }
  }

  return compressed;
};

/**
 * Decompresses a string encoded with run-length encoding.
 *
 * @param {string} data - The compressed string to be decompressed.
 * @returns {string} - The decompressed string.
 */
const decompressString = (data) => {
  let decompressed = "";
  let i = 0;

  while (i < data.length) {
    const char = data[i++];
    let countStr = "";

    while (i < data.length && /\d/.test(data[i])) {
      countStr += data[i++];
    }

    const count = parseInt(countStr, 10) || 1;
    decompressed += char.repeat(count);
  }

  return decompressed;
};

/**
 * Compresses or decompresses a given string.
 *
 * @param {string} data - The string to be compressed or decompressed.
 * @param {boolean} [toCompress=true] - Flag indicating if the string should be compressed or decompressed.
 * @returns {string} - The compressed or decompressed string.
 * @throws {Error} - Throws an error if the types of the parameters are invalid.
 */
const compressor = (data, toCompress = true) => {
  // Type validation
  if (typeof data !== "string" || typeof toCompress !== "boolean") {
    throw new Error("InvalidType");
  }

  return toCompress ? compressString(data) : decompressString(data);
};

module.exports = compressor;
