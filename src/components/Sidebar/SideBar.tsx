import Card from './Card';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="search">
        <input type="text" placeholder="Search for a city or airport" />
      </div>
      <div className="flex flex-col gap-[20px] w-full">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SideBar;
