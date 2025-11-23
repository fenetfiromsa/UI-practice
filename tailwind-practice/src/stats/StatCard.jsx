export default function StatCard({ icon, value, label, trend }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-5 flex items-start gap-4">
      
     
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
        {icon || <span className="text-indigo-600 font-semibold">●</span>}
      </div>

      
      <div className="flex-1">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500 mt-1">{label}</div>
      </div>

     
      {trend && (
        <div className={`text-sm font-medium self-start ${trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
          {trend}
        </div>
      )}
    </div>
  );
}
