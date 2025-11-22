import React from 'react';
import { TypewriterEffect } from './TypewriterEffect';
import { ChevronDown, Zap, ShieldCheck, Server } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background with Video Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505] z-10"></div>
        
        {/* 
          Background Video:
          Atmospheric red fog/dark forest
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://picsum.photos/1920/1080?grayscale&blur=2"
          className="w-full h-full object-cover scale-105 opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-red-fog-in-a-dark-forest-4237-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] z-0 opacity-30 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-[-50px]">
        
        {/* Main Title with Custom Dazzling Effect */}
        <div className="relative inline-block mb-6 group cursor-default">
          {/* Ghost/Blur Layer for Ambience */}
          <h1 className="absolute inset-0 text-6xl md:text-9xl font-black tracking-tighter uppercase text-cyan-500/30 blur-xl transform scale-105 select-none font-tech">
            及时雨引擎
          </h1>
          
          {/* Main Dazzling Text */}
          <h1 className="relative text-6xl md:text-9xl font-black tracking-tighter text-white uppercase dazzling-neon italic font-tech">
            及时雨引擎
            {/* Shine Overlay */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none mix-blend-overlay"></span>
          </h1>
        </div>

        {/* Subtitle - Moved to next line */}
        <div className="mb-12">
           <span className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-md text-2xl md:text-3xl font-bold text-cyan-400 tracking-[0.2em] uppercase font-tech shadow-[0_0_15px_rgba(6,182,212,0.3)]">
             2026 全新架构 · 极致稳定
           </span>
        </div>

        {/* Typewriter - HD Gradient Colorful Font */}
        <div className="h-24 md:h-32 flex items-center justify-center">
           <TypewriterEffect 
            words={["强力 反外挂 系统", "万人同屏 不卡顿", "商业级 稳定 引擎", "兼容 所有 传奇 版本"]} 
            // HD Gradient: No text-shadow, heavy font weight, sharp gradient
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#bc13fe] to-[#ff00ff] font-tech tracking-wide filter drop-shadow-sm pb-2"
            typingSpeed={100}
            deletingSpeed={50}
            pauseTime={1500}
          />
        </div>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-tech opacity-90">
          专为热血传奇打造的高性能商业引擎。集成智能反挂、高效网关与全新脚本系统。
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#download"
            className="w-full sm:w-auto px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-none skew-x-[-10deg] transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)] group border border-cyan-400"
          >
            <span className="block skew-x-[10deg] text-lg uppercase tracking-widest">立即下载引擎</span>
          </a>
          <a 
            href="#anticheat"
            className="w-full sm:w-auto px-10 py-4 bg-black/50 border border-purple-500 hover:bg-purple-600/20 text-purple-400 hover:text-purple-300 font-bold rounded-none skew-x-[-10deg] transition-all duration-300 transform hover:scale-110 active:scale-95 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          >
             <span className="block skew-x-[10deg] text-lg uppercase tracking-widest flex items-center gap-2 justify-center">
               <ShieldCheck size={20} />
               查看反挂详情
             </span>
          </a>
        </div>

        {/* Features Mini Grid */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-gray-800 pt-8 opacity-80 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-all duration-300 cursor-pointer transform hover:scale-110 group">
                <Zap className="mb-2 w-8 h-8 group-hover:animate-pulse" />
                <span className="text-sm font-semibold tracking-wide font-tech">极速响应</span>
            </div>
            <div className="flex flex-col items-center border-l border-r border-gray-800 text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer transform hover:scale-110 group">
                <ShieldCheck className="mb-2 w-8 h-8 group-hover:animate-bounce" />
                <span className="text-sm font-semibold tracking-wide font-tech">零误封</span>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-110 group">
                <Server className="mb-2 w-8 h-8 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-semibold tracking-wide font-tech">多线程架构</span>
            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-500/50 hover:text-cyan-400 cursor-pointer transition-colors">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};