export enum LetterE {
  A,
  B,
  C,
  Ç,
  D,
  E,
  Ə,
  F,
  G,
  Ğ,
  H,
  X,
  I,
  İ,
  J,
  K,
  Q,
  L,
  M,
  N,
  O,
  Ö,
  P,
  R,
  S,
  Ş,
  T,
  U,
  Ü,
  V,
  Y,
  Z,
}

export interface LetterI {
  /**
   * Returns the underlying letter as a member of {@link LetterE}.
   */
  letter(): LetterE;
  /**
   * Returns this letter in Latin script (1992-nowadays).
   *
   * @see {@link https://en.wikipedia.org/wiki/Azerbaijani_alphabet#Transliteration|Azerbaijani alphabet}
   */
  asLatin(): string;
  /**
   * Returns this letter in Cyrillic script (1958–1991).
   *
   * @see {@link https://en.wikipedia.org/wiki/Azerbaijani_alphabet#Transliteration|Azerbaijani alphabet}
   */
  asCyrillic(): string;
}
