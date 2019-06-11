export class Track{
    trackID:number;
    trackName:String;
    trackComments:string;

    constructor(trackID,trackname,comments){

        this.trackID=trackID;
        this.trackName=trackname;
        this.trackComments=comments;
    }
}