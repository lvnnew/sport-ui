/* eslint-disable babel/no-invalid-this */
export const bigIntToJSON = function (this: BigInt) {
  return this.toString();
};

if (typeof (BigInt.prototype as any).toJSON !== 'function') {
  (BigInt.prototype as any).toJSON = bigIntToJSON;
}
