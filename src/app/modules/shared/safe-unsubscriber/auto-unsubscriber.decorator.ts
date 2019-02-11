// Thanks to Netanel Basal
// src: https://netbasal.com/automagically-unsubscribe-in-angular-4487e9853a88
import { Unsubscriber } from 'app/modules/shared/safe-unsubscriber/unsubscriber';

export function AutoUnsubscriber() {
  return function ( constructor ) {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
      for (const prop of Object.keys(this)) {
        const property = this[ prop ];
        // tslint:disable-next-line:no-unused-expression
        property && unsubscribe(property);
      }
      // Call original OnDestroy function
      // tslint:disable-next-line:no-unused-expression
      original && isFunction(original) && original.apply(this, arguments);
    };
  };
}

const isFunction = (func: any) => typeof func === 'function';

const isSafeUnsubscriber = (property: any) => property instanceof Unsubscriber;

const unsubscribe = (property: any) => {
  // tslint:disable-next-line:no-unused-expression
  isFunction(property.unsubscribe) && property.unsubscribe()
  ||
  isSafeUnsubscriber(property) && (property as Unsubscriber).unsubscribeAll();
};
