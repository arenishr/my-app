
export class CV { 
    private id: number;
    private name!: string; 
    private education_1!: string;
    private education_2!: string;
    private id_type!: string;
    private id_no!: string;
    private current_job!: string;
    private experience!: string;
    private skills!: string;
    private languages!: string;

     
    constructor(id: number, name: string, education_1: string) {
        this.id = id;
        this.name = name;
        this.education_1 = education_1;
       
      }

} 