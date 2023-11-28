import {generateUUID} from "../utils/generateGUID";


export class Customer{
  Id:string=generateUUID();
  Firstname!:string;
  Lastname!:string;
  DateOfBirth!:string;
  PhoneNumber!:string;
  Email!:string;
  BankAccountNumber!:string;
}
/*
export function _customerUniqueId(customer:Customer) {
  return `${customer?.Firstname}-${customer?.Lastname}-${customer?.DateOfBirth}-${customer?.Email}`

}
*/
