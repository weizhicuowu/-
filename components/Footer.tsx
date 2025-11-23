import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center text-sm">JS</span>
               及时雨引擎
             </h3>
             <p className="text-gray-500 text-sm leading-7 max-w-md">
               致力于为传奇爱好者提供最稳定、最高效的服务器解决方案。十年技术沉淀，只为那一刀烈火的激情。
             </p>
             <div className="mt-6 text-gray-400 font-mono">
               联系QQ: 88888888 (仅限技术支持)
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">快速链接</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">官方首页</a></li>
              <li><a href="#download" className="hover:text-cyan-400 transition-colors">引擎下载</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">商业授权</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">技术论坛</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">相关资源</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">补丁生成器</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">脚本命令查询</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">UI 编辑器</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Navicat for SQLite</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 mt-8">
           <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg mb-8 flex items-start gap-3">
              <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
              <div className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-red-400 block mb-1">免责声明 / DISCLAIMER</strong>
                本站提供的及时雨引擎(JSYM2)仅供个人学习研究和技术交流使用，请勿用于商业用途或非法运营游戏服务器。
                使用本软件产生的一切法律后果由使用者自行承担，本站不承担任何连带责任。如果您发现本站内容侵犯了您的权益，请联系我们删除。
                <br/>
                This software is for educational and technical research purposes only. Do not use for illegal commercial operations.
              </div>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
              <p>&copy; 2026 及时雨引擎 (www.jsym2.com) All Rights Reserved.</p>
              <div className="mt-2 md:mt-0 flex gap-4">
                 <a href="#" className="hover:text-gray-400">隐私政策</a>
                 <a href="#" className="hover:text-gray-400">服务条款</a>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};