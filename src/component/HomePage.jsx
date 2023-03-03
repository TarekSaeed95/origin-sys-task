import Table from "./Table";
function HomePage() {
  return (
    <div className="flex items-center flex-col justify-center px-8 md:px-0 container m-auto pb-32">
      <h2 className="text-4xl md:text-6xl font-bold text-red-600 mb-20 -tracking-[3px] md:-tracking-[6px] underline underline-offset-8	">
        Manage Users
      </h2>
      <Table />
    </div>
  );
}
export default HomePage;
