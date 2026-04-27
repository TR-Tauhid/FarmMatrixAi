import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "10:00", price: 4000, volume: 2400 },
  { time: "12:00", price: 3000, volume: 1398 },
  { time: "14:00", price: 2000, volume: 9800 },
  { time: "16:00", price: 2780, volume: 3908 },
  { time: "18:00", price: 1890, volume: 4800 },
];

export default function TrendAnalysisChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold">Trend Analysis</h3>
          <p className="text-sm text-slate-500">
            Price vs Volumetric Flow (24h)
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-xs bg-slate-100 dark:bg-slate-800 border-none">
            1D
          </button>
          <button className="btn btn-xs btn-primary border-none">1W</button>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#4f46e5"
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
