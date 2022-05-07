export interface StrapiPagination {
  readonly page: number;
  readonly pageSize: number;
  readonly pageCount: number;
  readonly total: number;
}

export type StrapiModel<T extends {}> = T & {
  readonly id: number;
};
// export type StrapiComponent<T extends {}> = T & {
//   readonly __component: string;
//   readonly id: number;
// };

export interface StrapiComponent {
  readonly __component: string;
  readonly id: number;
}
