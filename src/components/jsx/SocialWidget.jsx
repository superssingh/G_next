import Link from "next/link";
const SocialWidget = ({ social }) => {
  return (
    <div className="flex showSlow z-2  my-2 place-content-center">
      {social &&
        social.map((s) => {
          return (
            <Link
              href={s.url}
              key={s.name}
              legacyBehavior
            >
              <div className={s.name}>{s.icon}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default SocialWidget;
