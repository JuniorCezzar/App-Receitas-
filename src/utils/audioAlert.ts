/**
 * Web Audio API synthesizer for pleasant culinary kitchen timer chime
 */
export function playTimerCompletionChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    const playTone = (freq: number, startTime: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    // 3 pleasant bell tones
    playTone(587.33, now, 0.4);       // D5
    playTone(739.99, now + 0.15, 0.4); // F#5
    playTone(880.00, now + 0.3, 0.8);  // A5
  } catch (err) {
    console.warn('Audio chime could not be played:', err);
  }
}
