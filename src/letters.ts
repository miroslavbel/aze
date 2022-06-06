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

export enum VowelHeight {
  High,
  Mid,
  Low,
}

export enum VowelBackness {
  Front,
  Back,
}

export enum VowelRoundedness {
  Rounded,
  Unrounded,
}

export enum ConsonantVoice {
  Voiced,
  Voiceless,
}

export interface VowelInfoI {
  height: VowelHeight;
  backness: VowelBackness;
  roundedness: VowelRoundedness;
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
  public letter(): VowelLetterT {
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
  /**
   * Returns phonetical info about the vowel used to perform vowel harmony.
   */
  public getInfo(): VowelInfoI {
    let backness = undefined;
    let height = undefined;
    let roundedness = undefined;
    switch (this.data) {
      case LetterE.İ:
      case LetterE.Ü:
      case LetterE.E:
      case LetterE.Ö:
      case LetterE.Ə:
        backness = VowelBackness.Front;
        break;
      default:
        backness = VowelBackness.Back;
        break;
    }
    switch (this.data) {
      case LetterE.Ə:
      case LetterE.A:
        height = VowelHeight.Low;
        break;
      case LetterE.E:
      case LetterE.Ö:
      case LetterE.O:
        height = VowelHeight.Mid;
        break;
      default:
        height = VowelHeight.High;
        break;
    }
    switch (this.data) {
      case LetterE.Ü:
      case LetterE.Ö:
      case LetterE.U:
      case LetterE.O:
        roundedness = VowelRoundedness.Rounded;
        break;
      default:
        roundedness = VowelRoundedness.Unrounded;
        break;
    }
    return {
      height: height,
      backness: backness,
      roundedness: roundedness,
    };
  }
}

export class Consonant implements LetterI {
  private readonly data: ConsonantLetterT;
  constructor(s: string) {
    if (s.length != 1) {
      throw new Error("given string must be a one length string");
    }
    switch (s[0]) {
      case "b":
        this.data = LetterE.B;
        break;
      case "c":
        this.data = LetterE.C;
        break;
      case "ç":
        this.data = LetterE.Ç;
        break;
      case "d":
        this.data = LetterE.D;
        break;
      case "f":
        this.data = LetterE.F;
        break;
      case "g":
        this.data = LetterE.G;
        break;
      case "ğ":
        this.data = LetterE.Ğ;
        break;
      case "h":
        this.data = LetterE.H;
        break;
      case "x":
        this.data = LetterE.X;
        break;
      case "j":
        this.data = LetterE.J;
        break;
      case "k":
        this.data = LetterE.K;
        break;
      case "q":
        this.data = LetterE.Q;
        break;
      case "l":
        this.data = LetterE.L;
        break;
      case "m":
        this.data = LetterE.M;
        break;
      case "n":
        this.data = LetterE.N;
        break;
      case "p":
        this.data = LetterE.P;
        break;
      case "r":
        this.data = LetterE.R;
        break;
      case "s":
        this.data = LetterE.S;
        break;
      case "ş":
        this.data = LetterE.Ş;
        break;
      case "t":
        this.data = LetterE.T;
        break;
      case "v":
        this.data = LetterE.V;
        break;
      case "y":
        this.data = LetterE.Y;
        break;
      case "z":
        this.data = LetterE.Z;
        break;
      default:
        throw new Error("given string doesn't contain consonant");
    }
  }
  public letter(): ConsonantLetterT {
    return this.data;
  }
  public asLatin(): string {
    switch (this.data) {
      case LetterE.B:
        return "b";
      case LetterE.C:
        return "c";
      case LetterE.Ç:
        return "ç";
      case LetterE.D:
        return "d";
      case LetterE.F:
        return "f";
      case LetterE.G:
        return "g";
      case LetterE.Ğ:
        return "ğ";
      case LetterE.H:
        return "h";
      case LetterE.X:
        return "h";
      case LetterE.J:
        return "j";
      case LetterE.K:
        return "k";
      case LetterE.Q:
        return "q";
      case LetterE.L:
        return "l";
      case LetterE.M:
        return "m";
      case LetterE.N:
        return "n";
      case LetterE.P:
        return "p";
      case LetterE.R:
        return "r";
      case LetterE.S:
        return "s";
      case LetterE.Ş:
        return "ş";
      case LetterE.T:
        return "t";
      case LetterE.V:
        return "v";
      case LetterE.Y:
        return "y";
      case LetterE.Z:
        return "z";
    }
  }
  public asCyrillic(): string {
    switch (this.data) {
      case LetterE.B:
        return "б";
      case LetterE.C:
        return "ҹ";
      case LetterE.Ç:
        return "ч";
      case LetterE.D:
        return "д";
      case LetterE.F:
        return "ф";
      case LetterE.G:
        return "ҝ";
      case LetterE.Ğ:
        return "ғ";
      case LetterE.H:
        return "һ";
      case LetterE.X:
        return "х";
      case LetterE.J:
        return "ж";
      case LetterE.K:
        return "к";
      case LetterE.Q:
        return "г";
      case LetterE.L:
        return "л";
      case LetterE.M:
        return "м";
      case LetterE.N:
        return "н";
      case LetterE.P:
        return "п";
      case LetterE.R:
        return "р";
      case LetterE.S:
        return "с";
      case LetterE.Ş:
        return "ш";
      case LetterE.T:
        return "т";
      case LetterE.V:
        return "в";
      case LetterE.Y:
        return "ј";
      case LetterE.Z:
        return "з";
    }
  }
}
