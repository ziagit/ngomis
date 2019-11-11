export interface IOrganization {
    id:number;
    nameDa: string;
    nameEn: string;
    abrivation: string;
    registerNo: number;
    registerDate:number;
    contactNo:number;
    email:string;
    organizationtype_id:number;
    donner_id:number;
    
    goals:string;
    currentCashAmount:number;
    currency:number;
    house:string;
    street:string;
    district_id:number;
    province_id:number;
  }