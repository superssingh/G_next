import Link from "next/link";
import { TagName } from "..";
const Categories = ({ categories }) => {
  return (
    <div className="showSlow widget relative w-auto md:w-80 place-self-start  shadow-lg drop-shadow-md  hover:border-green-500 rounded-lg p-6 mb-6 md:mx-2">
      <h3 className="w-full text-md text-gray-800 border-b border-slate-500/[.50] pb-2">
        Categories
      </h3>
      <div className="flex place-content-start ">
        {categories &&
          categories.map((m) => (
            <Link href={`/categories/${m.name}`} key={m.id}>
              <div className="text-center transition-all duration-700 bg-white/50 shadow-lg shadow-slate-700/[.50] rounded-lg mt-2 mx-1 hover:bg-white">
                <div className="w-fit p-2 ">
                  <span className="text-gray-800">{m.name}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
