import { Subscription } from 'rxjs';

export class Unsubscriber {
  private subscriptions: Subscription[] = [];
  constructor() { }

  public safeSubscription(sub: Subscription): Subscription {
    this.subscriptions.push(sub);
    return sub;
  }

  public safeSubscriptions(subs: Subscription[]): Subscription[] {
    this.subscriptions.push(...subs);
    return subs;
  }

  public unsubscribeAll() {
    this.subscriptions.forEach(element => !element.closed && element.unsubscribe() );
  }
}
