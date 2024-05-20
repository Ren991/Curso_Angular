// Desestructuración: Extraer piezas que nos interesan.

interface AudioPlayer {
    audioVolume: number;
    songDuration:number;
    song: string;
    details: Details
}
interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:"Pep",
        year:2015
    }
}

const {song:anotherSong , songDuration:duration, details} = audioPlayer; // Desestructurar

/*const {author} = details;
console.log("Song:", anotherSong);
console.log("Duration", duration);
console.log("Author",author);*/

const [ , , trunks = "Not found"]: string[] = ["Goku","Vegetta"];

console.log("Personaje 3:" , trunks);


export {};