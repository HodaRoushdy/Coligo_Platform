import requireAuth from "../../Utils/require.auth";

const AnnoucePage = () => {
  return (
    <div className="grid sm:grid-cols-1 xl:grid-cols-1">
      <div className="flex items-center justify-center h-screen bg-indigo-400">
        <div className="bg-white p-10 shadow-2xl rounded-md border-indigo-900 outline-none">
          <h1 className="font-bold text-violet-950 text-3xl">
            The Annoucement Page
          </h1>
        </div>
      </div>
    </div>
  );
};
const Annouce = requireAuth(AnnoucePage);
export default Annouce;
