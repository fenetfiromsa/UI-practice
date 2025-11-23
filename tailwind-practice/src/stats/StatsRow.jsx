import StatCard from "./StatCard";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard value="1,234" label="Active Users" trend="+4.2%" />
      <StatCard value="$12.3k" label="MRR" trend="+2.1%" />
      <StatCard value="87" label="New Signups" trend="-1.2%" />
    </div>
  );
}
