import Link from "next/link";
import * as TagName from "../js/constants";
const SocialWidget = () => {
  return (
    <div className="showSlow z-2">
      {TagName.socialLinks.map((s) => {
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
