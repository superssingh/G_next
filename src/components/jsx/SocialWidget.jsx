import Link from "next/link";
import { TagName } from "..";
const SocialWidget = ({ social }) => {
  return (
    <div className="showSlow z-2">
      {social.map((s) => {
        return (
          <Link href={s.url} key={s.name}>
            <a className={s.name}>{s.icon}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialWidget;
