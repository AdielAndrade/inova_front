export class Missoes{
id: number;
name: string;
description: string;
points: number;
secret_code:string;
is_public: boolean;
is_grupal:boolean;
single_answer: boolean;
has_image: boolean;
has_audio: boolean;
has_video: boolean;
has_text: boolean;
has_geolocation: boolean;
end_message:string;
start_time: string;
end_time: string;
created_at: string;

constructor(id: number, name: string, description: string, points: number, secret_code:string, is_public: boolean, is_grupal:boolean, single_answer: boolean,
has_image: boolean, has_audio: boolean, has_video: boolean, has_text: boolean, has_geolocation: boolean, end_message:string, start_time: string, end_time: string,
created_at: string){

  this.id = id;
  this.name = name;
  this.description = description;
  this. points = points;
  this.secret_code = secret_code;
  this.is_grupal = is_grupal;
  this.is_public = is_public;
  this.single_answer = single_answer;
  this.has_image= has_image;
  this.has_audio= has_audio;
  this.has_video = has_video;
  this.has_text = has_text;
  this.has_geolocation = has_geolocation;
  this.end_message = end_message;
  this.start_time= start_time;
  this.end_time= end_time;
  this.created_at = created_at;

}
}
