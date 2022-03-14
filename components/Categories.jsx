import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className="relative w-auto md:w-80 m-2 place-self-start bg-white bg-opacity-50 shadow-lg drop-shadow-md border-y-2 border-slate-100/[.45] rounded-lg p-6 mb-6 md:mx-2">
      <h3 className="w-full text-md text-gray-800 border-b border-slate-50/[.50] pb-2">
        Categories
      </h3>
      <div className="flex  ">
        {categories &&
          categories.map((m) => (
            <Link href={`/categories/${m.name}`} key={m.id}>
              <div className="text-center transition-all duration-700 bg-teal-50 shadow-lg shadow-slate-700/[.30] bg-opacity-30 place-content-start rounded-lg mt-2 mx-1 hover:bg-opacity-80">
                <div className="w-fit px-4 py-2 ">
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
