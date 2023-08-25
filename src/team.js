export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error();
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      try {
        this.add(character);
      } catch (e) {}
    });
  }

  toArray() {
    return [...this.members];
  }
}
