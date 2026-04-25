import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '04 MAY', v10: 30, v30: 20, v60: 10 },
  { date: '06 MAY', v10: 45, v30: 25, v60: 12 },
  { date: '08 MAY', v10: 70, v30: 40, v60: 15 },
  { date: '10 MAY', v10: 40, v30: 20, v60: 25 },
];

const SoilMoistureChart = () => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-xl font-bold">Volumetric Water Content (VWC)</h3>
        <p className="text-sm text-slate-500">Trends across 10cm, 30cm, and 60cm depths</p>
      </div>
      <div className="flex gap-4 text-xs font-bold">
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-600" /> 10cm</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-600" /> 30cm</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-600" /> 60cm</span>
      </div>
    </div>
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="v10" stroke="#059669" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="v30" stroke="#2563eb" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="v60" stroke="#475569" strokeWidth={3} dot={false} />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10}} dy={10} />
          <YAxis hide />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default SoilMoistureChart;