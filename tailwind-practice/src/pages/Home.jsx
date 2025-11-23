
import Textarea from "../components/forms/Textarea";
import StatsRow from "../stats/StatsRow";
import Button from "../ui/Button";
import Card from "../ui/Card";
function Home() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">UI Practice</h1>
      <p className="text-gray-600">Build components here.</p>
      <StatsRow />
      <Button>Get started</Button>
      <Card>
  <h2 className="text-xl font-semibold">Hello</h2>
  <p>Nice card.</p>
</Card>
<Textarea label="write your message" />
   


    </div>
  );
}

export default Home;
