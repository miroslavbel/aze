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

export type VowelLetterT =
  | LetterE.A
  | LetterE.E
  | LetterE.Ə
  | LetterE.I
  | LetterE.İ
  | LetterE.O
  | LetterE.Ö
  | LetterE.U
  | LetterE.Ü;

export type ConsonantLetterT =
  | LetterE.B
  | LetterE.C
  | LetterE.Ç
  | LetterE.D
  | LetterE.F
  | LetterE.G
  | LetterE.Ğ
  | LetterE.H
  | LetterE.X
  | LetterE.J
  | LetterE.K
  | LetterE.Q
  | LetterE.L
  | LetterE.M
  | LetterE.N
  | LetterE.P
  | LetterE.R
  | LetterE.S
  | LetterE.Ş
  | LetterE.T
  | LetterE.V
  | LetterE.Y
  | LetterE.Z;

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

export class Vowel implements LetterI {
  private readonly data: VowelLetterT;
  constructor(s: string) {
    if (s.length != 1) {
      throw new Error("given string must be a one length string");
    }
    switch (s[0]) {
      case "a":
        this.data = LetterE.A;
        break;
      case "e":
        this.data = LetterE.E;
        break;
      case "ə":
        this.data = LetterE.Ə;
        break;
      case "ı":
        this.data = LetterE.I;
        break;
      case "i":
        this.data = LetterE.İ;
        break;
      case "o":
        this.data = LetterE.O;
        break;
      case "ö":
        this.data = LetterE.Ö;
        break;
      case "u":
        this.data = LetterE.U;
        break;
      case "ü":
        this.data = LetterE.Ü;
        break;
      default:
        throw new Error("given string doesn't contain vowel");
    }
  }
  public letter(): LetterE {
    return this.data;
  }
  public asLatin(): string {
    switch (this.data) {
      case LetterE.A:
        return "a";
      case LetterE.E:
        return "e";
      case LetterE.Ə:
        return "ə";
      case LetterE.I:
        return "ı";
      case LetterE.İ:
        return "i";
      case LetterE.O:
        return "o";
      case LetterE.Ö:
        return "ö";
      case LetterE.U:
        return "u";
      case LetterE.Ü:
        return "ü";
    }
  }
  public asCyrillic(): string {
    switch (this.data) {
      case LetterE.A:
        return "а";
      case LetterE.E:
        return "е";
      case LetterE.Ə:
        return "ә";
      case LetterE.I:
        return "ы";
      case LetterE.İ:
        return "и";
      case LetterE.O:
        return "о";
      case LetterE.Ö:
        return "ө";
      case LetterE.U:
        return "у";
      case LetterE.Ü:
        return "ү";
    }
  }
}
