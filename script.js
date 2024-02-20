const player = document.getElementById("player");
const playlist = document.getElementById("playlist");
const play=document.getElementById("play")
const pause=document.getElementById("pause")
const forward=document.getElementById("forward")
const backward=document.getElementById("back")
const progress=document.getElementById("progress")
const allSongs = [
    {
      id: 0,
      title: "Scratching The Surface",
      artist: "Quincy Larson",
      duration: "4:25",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
      id: 1,
      title: "Can't Stay Down",
      artist: "Quincy Larson",
      duration: "4:15",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
      id: 2,
      title: "Still Learning",
      artist: "Quincy Larson",
      duration: "3:51",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },
    {
      id: 3,
      title: "Cruising for a Musing",
      artist: "Quincy Larson",
      duration: "3:34",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
    },
    {
      id: 4,
      title: "Never Not Favored",
      artist: "Quincy Larson",
      duration: "3:35",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
    },
    {
      id: 5,
      title: "From the Ground Up",
      artist: "Quincy Larson",
      duration: "3:12",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
    }
  ];


  player.onloadedmetadata= function(){
    progress.max=player.duration
    progress.value=player.currentTime
  }

  let currentIcon=null;


allSongs.forEach((song) => {
  const li = document.createElement("li");
  li.textContent = `${song.title} - ${song.artist}`;
  play.addEventListener("click", () => {
    player.src = song.src;
    player.play();
    player.currentTime=progress.value
    play.classList.add("styling")
    pause.classList.remove("styling")
  });
  li.textContent = `${song.title} - ${song.artist}`;
  li.addEventListener("click", () => {

    if(currentIcon){
      currentIcon.remove()
      currentIcon=null
    }
    const fun = document.createElement("i");
    fun.classList.add("fas", "fa-music");
    li.appendChild(fun);

    // Set player source and play
    player.src = song.src;
    player.play();
    player.currentTime = progress.value;

    // Add/remove styling class
    play.classList.add("styling");
    pause.classList.remove("styling");

    currentIcon=fun;
  });


  pause.addEventListener("click", () => {
    player.src = song.src;
    player.pause();
    player.currentTime=progress.value
    play.classList.remove("styling") 
    pause.classList.add("styling")
    currentIcon.remove()
    currentIcon=null
  });


 let currentsongIndex=0;

 forward.addEventListener("click", () => {
  currentsongIndex=(currentsongIndex+1)%allSongs.length
  player.src = allSongs[currentsongIndex].src;
  player.play();
});


backward.addEventListener("click", () => {
  currentsongIndex=(currentsongIndex-1)%allSongs.length
  player.src = allSongs[currentsongIndex].src;
  player.play();
});

  playlist.appendChild(li);
});

if(player.play()){
  setInterval(()=>{
    progress.value=player.currentTime
  },500)
}
progress.onchange=function(){
  player.play()
  player.currentTime=progress.value 
}
