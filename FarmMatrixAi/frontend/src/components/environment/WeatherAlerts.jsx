import { useState } from "react";

const WeatherAlerts = () => {
  const [dismissed, setDismissed] = useState([]);

  // Demo alerts data
  const alerts = [
    {
      id: 1,
      type: "warning",
      icon: "🌡️",
      title: "Heat Advisory",
      message: "Temperature expected to reach 38°C tomorrow. Ensure adequate irrigation for heat-sensitive crops.",
      time: "Tomorrow, 12:00 PM",
      color: "orange",
    },
    {
      id: 2,
      type: "danger",
      icon: "⛈️",
      title: "Heavy Rain Warning",
      message: "Heavy rainfall expected (45-60mm) on May 2-3. Consider postponing pesticide applications.",
      time: "May 2-3",
      color: "red",
    },
    {
      id: 3,
      type: "info",
      icon: "💧",
      title: "Soil Moisture Alert",
      message: "Soil moisture levels in Zone B have dropped below 30%. Immediate irrigation recommended.",
      time: "Today, 2:30 PM",
      color: "blue",
    },
    {
      id: 4,
      type: "success",
      icon: "🌬️",
      title: "Frost Risk Ended",
      message: "No frost risk for the next 7 days. Safe to transplant tender seedlings.",
      time: "Valid until May 5",
      color: "emerald",
    },
  ];

  const getAlertStyles = (color) => {
    const styles = {
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        icon: "text-orange-500",
        title: "text-orange-800 dark:text-orange-300",
        badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
      },
      red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-800",
        icon: "text-red-500",
        title: "text-red-800 dark:text-red-300",
        badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
      },
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-500",
        title: "text-blue-800 dark:text-blue-300",
        badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
      },
      emerald: {
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-800",
        icon: "text-emerald-500",
        title: "text-emerald-800 dark:text-emerald-300",
        badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
      },
    };
    return styles[color] || styles.blue;
  };

  const handleDismiss = (id) => {
    setDismissed([...dismissed, id]);
  };

  const activeAlerts = alerts.filter((alert) => !dismissed.includes(alert.id));

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            Weather Alerts
          </span>
          <h3 className="text-lg font-bold mt-1">Active Alerts</h3>
        </div>
        <span className="badge badge-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-none">
          {activeAlerts.length} Active
        </span>
      </div>

      <div className="space-y-3">
        {activeAlerts.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            <span className="text-4xl">✓</span>
            <p className="mt-2">No active alerts</p>
          </div>
        ) : (
          activeAlerts.map((alert) => {
            const style = getAlertStyles(alert.color);
            return (
              <div
                key={alert.id}
                className={`${style.bg} ${style.border} border-l-4 p-4 rounded-xl transition-all hover:shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <span className={`text-2xl ${style.icon}`}>{alert.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-bold ${style.title}`}>{alert.title}</h4>
                      <button
                        onClick={() => handleDismiss(alert.id)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        title="Dismiss"
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {alert.message}
                    </p>
                    <span className={`text-xs mt-2 inline-block px-2 py-1 rounded-full ${style.badge}`}>
                      {alert.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {activeAlerts.length > 0 && (
        <button className="btn btn-ghost btn-sm w-full mt-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
          View All Alerts →
        </button>
      )}
    </div>
  );
};

export default WeatherAlerts;