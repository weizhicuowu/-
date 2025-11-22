import React from 'react';
import { Download, Settings, Book, Box } from 'lucide-react';

export const Downloads: React.FC = () => {
  const downloads = [
    {
      title: "及时雨引擎 2026 旗舰版",
      version: "v2026.09.01 Build",
      size: "85.4 MB",
      desc: "包含全套服务端程序、登录器配置器、网关及反挂插件。",
      primary: true,
      icon: <Box className="w-8 h-8 text-white" />,
      url: "#"
    },
    {
      title: "万能登录器配置器",
      version: "v5.2.1",
      size: "12.8 MB",
      desc: "支持皮肤自定义、自动更新列表、微端配置。",
      primary: false,
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      url: "#"
    },
    {
      title: "合区工具 & 数据库编辑器",
      version: "v3.0 Tools",
      size: "5.6 MB",
      desc: "快速合区不卡顿，支持 DBC/Access/Sqlite 转换。",
      primary: false,
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      url: "#"
    },
    {
      title: "引擎说明书 & 脚本大全",
      version: "PDF/CHM",
      size: "120 MB",
      desc: "内含详细搭建教程、脚本命令查询、常见问题解答。",
      primary: false,
      icon: <Book className="w-8 h-8 text-green-400" />,
      url: "#"
    }
  ];

  return (
    <section id="download" className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.8)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 neon-text-purple font-tech">资源下载中心</h2>
            <p className="text-gray-500 font-tech">Download Center - 最新引擎与工具下载</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="text-cyan-400 hover:text-white transition-all text-sm flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4">
               查看历史版本归档 &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {downloads.map((item, index) => (
            <div 
              key={index}
              className={`relative group p-8 border transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center cursor-default hover:-translate-y-1
                ${item.primary 
                  ? 'bg-gradient-to-br from-cyan-900/20 to-black border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
                  : 'bg-dark-card border-gray-800 hover:border-gray-600 hover:bg-gray-900'
                }
              `}
            >
              <div className={`p-4 rounded-lg transition-transform duration-500 group-hover:scale-110 ${item.primary ? 'bg-cyan-600' : 'bg-gray-800 group-hover:bg-gray-700'}`}>
                {item.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`text-xl font-bold font-tech ${item.primary ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {item.title}
                  </h3>
                  {item.primary && <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded animate-pulse">HOT</span>}
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono">
                  <span>{item.version}</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>{item.size}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-0 font-tech">
                  {item.desc}
                </p>
              </div>

              <a 
                href={item.url}
                className={`shrink-0 px-6 py-3 rounded font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-110 active:scale-95
                  ${item.primary 
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-500'
                  }`}
              >
                <Download size={18} />
                下载
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};