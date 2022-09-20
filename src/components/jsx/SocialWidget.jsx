import Link from "next/link";

const SocialWidget = ({ social }) => {
  return (
    <div className="flex showSlow z-2 place-content-center">
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
