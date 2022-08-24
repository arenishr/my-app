
export class JobProfile { 
    private id: number;
    private title!: string; 
    private sector!:string;
    private qualification!: string;
    private experience!: string;
    private skills!: string;
    private license!: string;
    private salary!: string;
    private remarks!: string;


    constructor(id: number, title: string, sector: string) {
        this.id = id;
        this.title = title;
        this.sector = sector;
       
      }

} 