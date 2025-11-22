import React from 'react';
import { Shield, Lock, Cpu, Eye } from 'lucide-react';

export const AntiCheat: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400" />,
      title: "特征码云端识别",
      desc: "实时更新外挂特征库，云端同步打击，让变态外挂无处遁形。"
    },
    {
      icon: <Lock className="w-10 h-10 text-purple-400" />,
      title: "内存加密保护",
      desc: "独家内存加密技术，防止内存修改器，保护游戏核心数据不被篡改。"
    },
    {
      icon: <Eye className="w-10 h-10 text-green-400" />,
      title: "智能行为分析",
      desc: "AI 行为分析算法，精准识别自动挂机、自动打怪等脚本行为。"
    },
    {
      icon: <Shield className="w-10 h-10 text-red-400" />,
      title: "驱动级反挂",
      desc: "Ring0 层级防护，有效拦截加速器、按键精灵等底层辅助工具。"
    }
  ];

  return (
    <section id="anticheat" className="py-24 bg-dark-surface relative">
       {/* Decorative Element */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-blue">及时雨 GKP 反外挂系统</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            告别传统的封号模式，采用全新的智能拦截技术，还您一个绿色的游戏环境。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-card p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-cyan-500/20"></div>
              
              <div className="mb-6 p-4 bg-black inline-block rounded-full border border-gray-800 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Demo Section */}
        <div className="mt-20 rounded-2xl overflow-hidden border border-gray-800 relative bg-black">
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
           <div className="flex flex-col md:flex-row h-[400px]">
              <div className="w-full md:w-1/2 relative overflow-hidden">
                 <img src="https://picsum.photos/800/600?random=1" alt="Game Action" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute bottom-4 left-4 z-20 bg-black/80 px-4 py-2 border-l-4 border-red-500">
                    <p className="text-red-400 font-mono text-sm">ALERT: Speed Hack Detected</p>
                    <p className="text-gray-400 text-xs">Action: Blocked instantly</p>
                 </div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20 bg-dark-card/50 backdrop-blur-sm">
                 <h3 className="text-3xl font-bold text-white mb-4">即时拦截，无需人工</h3>
                 <p className="text-gray-400 mb-6">
                   我们的引擎会在服务端底层直接判定非法数据包，并在毫秒级内丢弃非法请求。不仅防止加速，更能防止自动喝药、自动锁定等破坏平衡的功能。
                 </p>
                 <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-500 rounded-full"></span> 100% 兼容主流 Windows 系统</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-500 rounded-full"></span> 无需安装任何客户端插件</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-500 rounded-full"></span> 极低 CPU 占用率</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};