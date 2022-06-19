export interface Language {
  readonly id: number;
  readonly label: string;
  readonly code: string;
  readonly flag: {
    name: string;
  };
}
