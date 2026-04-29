import React from 'react';

const RecentScansTable = () => {
  const scans = [
    {
      id: 1,
      timestamp: 'April 24, 2026• 09:12 AM',
      crop: 'Tomato',
      cropCode: 'TM',
      issue: 'Early Blight',
      confidence: '94.2%',
      status: 'danger'
    },
    {
      id: 2,
      timestamp: 'April 23, 2026• 04:45 PM',
      crop: 'Corn',
      cropCode: 'CN',
      issue: 'Common Rust',
      confidence: '88.7%',
      status: 'warning'
    },
    {
      id: 3,
      timestamp: 'April 22, 2026• 11:30 AM',
      crop: 'Potato',
      cropCode: 'PT',
      issue: 'HEALTHY',
      confidence: '99.1%',
      status: 'success'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl font-bold">Recent Scans</h2>
        <button className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
          View All History
        </button>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-[#0f172a] rounded-4xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <table className="table w-full border-separate border-spacing-y-0">
          <thead>
            <tr className="text-slate-400 border-b border-slate-50 dark:border-slate-800">
              <th className="bg-transparent py-6 px-8 text-[10px] font-black uppercase tracking-widest">Timestamp</th>
              <th className="bg-transparent py-6 px-8 text-[10px] font-black uppercase tracking-widest">Crop Type</th>
              <th className="bg-transparent py-6 px-8 text-[10px] font-black uppercase tracking-widest">Detected Issue</th>
              <th className="bg-transparent py-6 px-8 text-[10px] font-black uppercase tracking-widest">Confidence</th>
              <th className="bg-transparent py-6 px-8 text-[10px] font-black uppercase tracking-widest text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {scans.map((scan) => (
              <tr key={scan.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="py-6 px-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {scan.timestamp}
                </td>
                <td className="py-6 px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-[10px] font-black text-emerald-700 dark:text-emerald-400">
                      {scan.cropCode}
                    </div>
                    <span className="font-bold">{scan.crop}</span>
                  </div>
                </td>
                <td className="py-6 px-8">
                  <span className={`text-sm font-bold ${
                    scan.status === 'success' ? 'text-emerald-500' : 
                    scan.status === 'warning' ? 'text-amber-500' : 'text-slate-700 dark:text-slate-200'
                  }`}>
                    {scan.issue}
                  </span>
                </td>
                <td className="py-6 px-8">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-1000" 
                        style={{ width: scan.confidence }}
                      />
                    </div>
                    <span className="text-xs font-black text-slate-400">{scan.confidence}</span>
                  </div>
                </td>
                <td className="py-6 px-8 text-right">
                  <button className="text-xs font-bold text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentScansTable;