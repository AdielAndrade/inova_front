export class Pobjects {

  public id: number;
  public name: string;
  public description: string;
  public amount_avaliable: number;
  public photo: string;


  constructor(id: number, name: string, description: string, photo: string, amount_avaliable: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photo = photo;
    this.amount_avaliable = amount_avaliable;
    };
}
