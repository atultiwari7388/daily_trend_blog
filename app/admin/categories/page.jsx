import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6 w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Categories</h1>
        <Link href={"/admin/categories/form"}>
          <button className="flex gap-2 items-center btn btn-outline">
            Add
          </button>
        </Link>
      </div>
    </main>
  );
}
