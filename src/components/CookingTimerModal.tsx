import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, Timer, Flame } from 'lucide-react';
import { playTimerCompletionChime } from '../utils/audioAlert';

interface CookingTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  timerSecondsLeft: number;
  timerActive: boolean;
  timerLabel: string;
  onStartTimer: (minutes: number, label: string) => void;
  onPauseTimer: () => void;
  onResumeTimer: () => void;
  onResetTimer: () => void;
}

export const CookingTimerModal: React.FC<CookingTimerModalProps> = ({
  isOpen,
  onClose,
  timerSecondsLeft,
  timerActive,
  timerLabel,
  onStartTimer,
  onPauseTimer,
  onResumeTimer,
  onResetTimer
}) => {
  const [customMinutes, setCustomMinutes] = useState<number>(15);

  if (!isOpen) return null;

  const minutes = Math.floor(timerSecondsLeft / 60);
  const seconds = timerSecondsLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const presetTimes = [
    { label: '5 min', mins: 5, desc: 'Torradas / Bacon' },
    { label: '8 min', mins: 8, desc: 'Camarões / Ovos' },
    { label: '12 min', mins: 12, desc: 'Pão de Queijo / Peixe' },
    { label: '15 min', mins: 15, desc: 'Nuggets / Dadinhos' },
    { label: '20 min', mins: 20, desc: 'Asinhas / Legumes' },
    { label: '25 min', mins: 25, desc: 'Frango a Passarinho' },
    { label: '35 min', mins: 35, desc: 'Costelinha / Bolos' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2A1D]/70 backdrop-blur-xs">
      <div 
        className="bg-[#0A2A1D] text-white rounded-3xl w-full max-w-md p-6 sm:p-7 shadow-2xl border border-[#0D3827] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#0D3827]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F5BA31] text-[#0A2A1D] flex items-center justify-center font-bold">
              <Timer className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Timer Culinário Air Fryer</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Display Timer Countdown */}
        <div className="my-6 text-center">
          <p className="text-xs text-[#F5BA31] font-mono uppercase tracking-wider mb-1 truncate px-2 font-bold">
            {timerLabel || 'Timer da Air Fryer'}
          </p>
          <div className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-white tabular-nums py-2">
            {timeFormatted}
          </div>
          <p className="text-[11px] text-stone-300 mt-1 flex items-center justify-center gap-1">
            <Volume2 className="w-3.5 h-3.5 text-[#F5BA31]" />
            <span>Alerta sonoro suave tocará ao finalizar</span>
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {timerActive ? (
            <button
              onClick={onPauseTimer}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] font-black rounded-xl text-sm transition-colors cursor-pointer shadow-sm"
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>Pausar</span>
            </button>
          ) : timerSecondsLeft > 0 ? (
            <button
              onClick={onResumeTimer}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] font-black rounded-xl text-sm transition-colors cursor-pointer shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Continuar</span>
            </button>
          ) : (
            <button
              onClick={() => onStartTimer(customMinutes, 'Timer Manual')}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] font-black rounded-xl text-sm transition-colors cursor-pointer shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Iniciar ({customMinutes} min)</span>
            </button>
          )}

          <button
            onClick={onResetTimer}
            className="p-2.5 bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white rounded-xl transition-colors cursor-pointer"
            title="Zerar Timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => playTimerCompletionChime()}
            className="p-2.5 bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white rounded-xl transition-colors cursor-pointer"
            title="Testar Som do Alarme"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Presets Grid */}
        <div className="space-y-2 border-t border-[#0D3827] pt-4">
          <p className="text-xs font-bold text-[#F5BA31]">Atalhos rápidos para Air Fryer:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {presetTimes.map(p => (
              <button
                key={p.mins}
                onClick={() => onStartTimer(p.mins, p.desc)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-[#F5BA31]">
                    {p.label}
                  </span>
                  <Flame className="w-3 h-3 text-[#F5BA31]/70 group-hover:text-[#F5BA31]" />
                </div>
                <p className="text-[10px] text-stone-300 truncate mt-0.5">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
