export class Quiz{
id: number;
name: string;
description: string;
points: number;
secret_code:string;
is_public: boolean;
single_answer: boolean;
alternative_a: string;
alternative_b: string;
alternative_c: string;
alternative_d: string;
alternative_e: string;
correct_answer: string;
start_time: string;
end_time: string;
created_at: string;

constructor(id: number, name: string, description: string, points: number, secret_code:string, is_public: boolean, single_answer: boolean, alternative_a: string,
alternative_b: string, alternative_c: string, alternative_d: string, alternative_e: string, correct_answer: string,  start_time: string, end_time: string,
created_at: string){

  this.id = id;
  this.name = name;
  this.description = description;
  this. points = points;
  this.secret_code = secret_code;
  this.is_public = is_public;
  this.single_answer = single_answer;
  this.alternative_a =alternative_a;
  this.alternative_b =alternative_b,
  this.alternative_c =alternative_c,
  this.alternative_d =alternative_d,
  this.alternative_e =alternative_e,
  this.correct_answer = correct_answer;
  this.start_time= start_time;
  this.end_time= end_time;
  this.created_at = created_at;

}
}
