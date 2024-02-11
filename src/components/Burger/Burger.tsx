import menu from '@/assets/menu.svg';

function Burger() {
  return (
    <div className="burger">
      <img src={menu} alt="burger-icon" className="w-10" />
    </div>
  );
}

export default Burger;
