

export class AvPedidos {

  public id: number;

  public userName:string;
  public objectName:string;

  public amount: number;

  public photo: string;

  public status: string;
  public street: string;
  public zipcode: string;
  public number: number;

  public complement: string;
  public neighborhood: string;
  public city: string;
  public state: string;


  constructor(id: number, userName: string, objectName: string, amount: number, status: string, street: string, number: number, neighborhood: string, complement: string, city: string, state: string,  photo: string,zipcode: string) {

    this.id = id;
    this.userName = userName;
    this.objectName = objectName;
    this.status = status;
    this.photo = photo;
    this.zipcode = zipcode;
    this.street = street;
    this.photo = photo;
    this.neighborhood = neighborhood;
    this.complement = complement;
    this.city = city;
    this.state = state;
    this.number = number;
    this.amount = amount;
    };
}
