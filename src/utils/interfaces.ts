export interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type IPartialClient = Omit<IClient, "id">;

export interface IMotorcycle {
  id: string;
  name: string;
  description: string;
  year: number;
  price: number;
  imgURL: string;
}

export type IPartialMotorcycle = Omit<IMotorcycle, "id">;
