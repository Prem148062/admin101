import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";
type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((link) => {
              return (
                <Link to={link.url} className="listItem" key={link.id}>
                  <img src={link.icon} alt="" />
                  <span className="listItemTitle">{link.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
