/* eslint-disable @typescript-eslint/no-unused-vars */
import {AnyObject, Maybe, BaseSchema} from 'yup';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    onlyLatinAndCyrillicLetters(): this;
    onlyLatinAndCyrillicLettersAndDigits(): this;
    onlyPositiveDigits(): this;
    noSpaces(): this;
    onlyDigits(): this;
  }
}
