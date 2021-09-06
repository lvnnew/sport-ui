export const bigIntToJSON = function (this: BigInt) {
  return this.toString();
};

if (typeof (BigInt.prototype as any).toJSON !== 'function') {
  // eslint-disable-next-line no-extend-native
  (BigInt.prototype as any).toJSON = bigIntToJSON;
}
