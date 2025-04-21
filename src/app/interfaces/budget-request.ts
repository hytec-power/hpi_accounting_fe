import {User} from "src/app/interfaces/user";
import {FileUpload} from "src/app/interfaces/file-upload";
import { manpower } from "./request-manpower";
import {FileStore} from "src/app/interfaces/file-store";
import { HpiUser } from "./hpi-user";

export interface BudgetRequest {
  uuid: string,
  request_reference: string,
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
  manpower: HpiUser[];
  //ATTACHMENTS
  attachments: DocumentUpload[]
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

export interface DocumentUpload {
  name: string,
  uuid: string,
  file: FileUpload
}
export interface attachments {
  name: string,
  file: FileStore
}
