import { TrendData } from "../../dummy";

const TrendCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-cardColor p-4 rounded-2xl pl-8">
      <h1 className="font-bold  mb-3 mt-2 text-xl">Trends for you</h1>
      {TrendData.map((trend, id) => (
        <div className="flex flex-col gap-1" key={id}>
          <span className="font-bold">#{trend.name}</span>
          <span className="text-[13px]">{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
