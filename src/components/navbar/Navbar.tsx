import "./navbar.scss";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar">
      {/* Logo Image */}
      <div className="logo">
        <img src="/logo_1.svg" alt="logo" className="logo_Img" />
        <span>LolipopAdmin</span>
      </div>
      {/* Icons */}
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        {/* notification */}
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        {/* users  */}
        <div className="user">
          <img src="/users_avatar.jpg" alt="" />
          <span>WithawasDev</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}
