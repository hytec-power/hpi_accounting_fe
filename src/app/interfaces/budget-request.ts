import {User} from "src/app/interfaces/user";

export interface BudgetRequest {
  uuid: string,
  user: User,
  client: any,
  //REQUEST DETAIL
  type: string,
  purpose: string[],
  //CHARGING DETAILS
  quotation_reference :string,
  po_reference: string,
  po_amount:number,
  //DATE & TIME
  date_needed: string,
  time_needed: string,
  date_utilization: string,
  //PROJECT DETAILS
  project_name:string
  future_project: boolean,
  confidence_level: boolean,
  expected_quarter: number,
  expected_year: number,
  //BUDGET ALLOCATION
  budget_allocation: {
    particulars: BudgetParticulars[],
    others: BudgetOthers[],
  }
  budget_total: number,
  //MANPOWER
  manpower: any
  //CONTROLS
  archived: boolean,
  deleted_at: string,
  created_at: string,
  updated_at: string,
}

export interface BudgetParticulars {
  name: string,
  budget_daily: number,
  qty: number,
  days: number,
  total: number,
}

export interface BudgetOthers {
  name: string,
  total: number
}
