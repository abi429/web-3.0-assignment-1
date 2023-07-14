interface albumsInfo{
  artistName : string,
  albumTitle : string,
  tracks : number
}

function make_album(SingerName :string, title : string , tracks?:number): any
{
       let album = {
        Name : SingerName,
        titleOfAlbum : title,
        NoOfTracks : tracks
       }
       return album;
}

console.log(make_album("kiran","HOHAA"));
console.log(make_album("shapota","HiiiHAA",25));
console.log(make_album("kakota","jjjj",12));
