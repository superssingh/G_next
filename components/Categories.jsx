import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div className=" bg-white bg-opacity-50 shadow-xl drop-shadow-md rounded-lg p-6 mb-8">
      <h3 className=" text-lg text-gray-800 border-b pb-2">Categories</h3>
      {categories.map((m) => (
        <Link href={`/categories/${m.name}`} key={m.id}>
          <div className="text-center transition-all duration-700 flex bg-teal-50 shadow-lg bg-opacity-30 place-content-start items-center rounded-lg  my-2 hover:bg-opacity-80">
            <div className="px-5 py-2">
              <span className="w-full text-gray-800 ">{m.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;