import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AntiCheat } from './components/AntiCheat';
import { Downloads } from './components/Downloads';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Feature Strip */}
        <div className="bg-cyan-900/20 border-y border-cyan-900/50 py-4 overflow-hidden">
          <div className="flex justify-around text-cyan-500/80 font-mono text-sm uppercase tracking-widest animate-pulse">
             <span>System Online</span>
             <span>Gate Connected</span>
             <span>Anti-Cheat Active</span>
             <span>Db Loaded</span>
          </div>
        </div>

        <AntiCheat />
        
        <section id="changelog" className="py-20 bg-dark-bg border-b border-gray-900">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-12 text-center border-b border-gray-800 pb-4">
                <span className="border-b-4 border-cyan-500 pb-4">最近更新日志</span>
              </h2>
              <div className="space-y-8">
                 {[
                   { ver: 'v2026.09.01', type: 'Release', content: '重构网关通信协议，提升30%并发处理能力；修复部分脚本死循环漏洞。' },
                   { ver: 'v2026.08.15', type: 'Fix', content: '修复背包自动整理可能导致物品ID错乱的问题；优化怪物AI寻路算法。' },
                   { ver: 'v2026.08.01', type: 'Feature', content: '新增 GKP 反挂插件 3.0 版本，支持云端特征码更新；增加 Lua 脚本接口支持。' },
                 ].map((log, i) => (
                    <div key={i} className="flex gap-4 md:gap-8 items-start group">
                       <div className="w-24 shrink-0 text-right pt-1">
                          <span className="block text-cyan-400 font-mono font-bold">{log.ver}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${log.type === 'Release' ? 'bg-green-900 text-green-300' : 'bg-gray-800 text-gray-400'}`}>{log.type}</span>
                       </div>
                       <div className="relative border-l border-gray-800 pl-8 pb-2 group-hover:border-cyan-500/50 transition-colors">
                          <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all"></span>
                          <p className="text-gray-300 group-hover:text-white transition-colors">{log.content}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <Downloads />
      </main>
      <Footer />
    </div>
  );
}

export default App;