// Simple beep sounds using Web Audio API
let audioContext: AudioContext | null = null;

const initAudio = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

const beep = (frequency: number, duration: number, volume: number = 0.1) => {
  try {
    const ctx = initAudio();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (error) {
    // Fallback for browsers that don't support Web Audio API
    console.log('Audio not supported');
  }
};

export const playBeep = () => beep(800, 0.1);
export const playSuccess = () => {
  beep(659.25, 0.125);
  setTimeout(() => beep(783.99, 0.125), 125);
  setTimeout(() => beep(1046.50, 0.125), 250);
};
export const playError = () => {
  beep(300, 0.2);
  setTimeout(() => beep(250, 0.2), 200);
};