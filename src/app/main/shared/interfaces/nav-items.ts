export interface NavItems {
  name: string;
  icon: string;
  route?: string;
  children?: NavItems[];
}
