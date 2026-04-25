const WeeklyForecast = () => {
  const days = [
    { day: 'MON', temp: '26°/14°', precip: '10%', active: false },
    { day: 'TUE', temp: '28°/15°', precip: '5%', active: false },
    { day: 'WED', temp: '22°/12°', precip: '85%', active: true },
    { day: 'THU', temp: '21°/11°', precip: '60%', active: false },
    { day: 'FRI', temp: '24°/13°', precip: '20%', active: false },
    { day: 'SAT', temp: '27°/15°', precip: '5%', active: false },
    { day: 'SUN', temp: '29°/17°', precip: '0%', active: false },
  ];

  return (
    <div className="flex justify-between gap-2 h-full">
      {days.map((item) => (
        <div 
          key={item.day}
          className={`flex-1 flex flex-col items-center justify-between py-6 rounded-3xl transition-all ${
            item.active 
            ? 'bg-emerald-800 text-white shadow-lg' 
            : 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800'
          }`}
        >
          <span className="text-xs font-bold opacity-70">{item.day}</span>
          <div className="my-4 text-xl">☀️</div>
          <div className="text-center">
            <p className="font-bold">{item.temp.split('/')[0]}</p>
            <p className="text-xs opacity-50">{item.temp.split('/')[1]}</p>
          </div>
          <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-700 my-4" />
          <span className="text-[10px] font-medium opacity-60">{item.precip} Precip</span>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;