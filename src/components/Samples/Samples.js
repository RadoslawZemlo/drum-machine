const kickAudio = new Audio("/sounds/kick.wav");
const snareAudio = new Audio("/sounds/snare.wav");
const closedHHAudio = new Audio("/sounds/closedHH.wav");
const openHHAudio = new Audio("/sounds/openHH.wav");

export const kick = () => kickAudio.play();
export const snare = () => snareAudio.play();
export const closedHH = () => closedHHAudio.play();
export const openHH = () => openHHAudio.play();
