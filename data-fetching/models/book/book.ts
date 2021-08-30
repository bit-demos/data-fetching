
export class Book {
  constructor(
    /**
     * name of the book.
     */
    readonly name: string
  ) {}

  /**
   * get the book title size.
   */
  getTitleSize(): number {
    return this.name.length;
  }

  static fromJson(jsonStr: string) {
    const object = JSON.parse(jsonStr);
    return new Book(object.name);
  }
}
