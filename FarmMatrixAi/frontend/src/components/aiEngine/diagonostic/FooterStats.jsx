const FooterStats = () => {
  const stats = [
    { label: 'Engine Load', val: '12%', icon: '📊' },
    { label: 'Data Latency', val: '42ms', icon: '📡' },
    { label: 'Satellite Sync', val: 'Active', badge: 'LOCK ON' },
    { label: 'AI Agent', val: 'V4.2', icon: '🤖' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {stats.map((stat) => (
        <div key={stat.label} className="p-6 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-all hover:border-emerald-500/50">
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold dark:text-white">{stat.val}</span>
              {stat.badge && (
                <span className="px-2 py-0.5 text-[8px] font-black bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded">
                  {stat.badge}
                </span>
              )}
            </div>
          </div>
          <div className="text-xl opacity-20">{stat.icon || '⚡'}</div>
        </div>
      ))}
    </div>
  );
};

export default FooterStats;