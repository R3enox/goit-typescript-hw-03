interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
}

interface ISpellCaster {
  castSpell(): void;
}

export {ICharacter, ISpellCaster}