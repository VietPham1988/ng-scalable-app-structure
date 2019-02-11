export class User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public name: { 'first': string, 'last': string },
    public profileImage: string
  ) {}
}
