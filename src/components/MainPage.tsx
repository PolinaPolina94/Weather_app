import CommonPage from './CommonPage/CommonPage';
import SideBar from './Sidebar/SideBar';

function MainPage() {
  return (
    <div className="flex justify-between w-screen font-SF-Pro-Display">
      <CommonPage />
      <SideBar />
    </div>
  );
}

export default MainPage;
