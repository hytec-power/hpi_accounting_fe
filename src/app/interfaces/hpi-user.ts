export interface HpiUser {
  uuid: string,
  employees_id: string,
  firstname: string,
  middlename: string,
  positions: positions[],
  lastname: string,
  email: string,
  image?: string,
  gender:string
}

export interface positions{
  name: string
}