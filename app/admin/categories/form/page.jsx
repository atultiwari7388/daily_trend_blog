"use client";

import { useCategoryForm } from "./context/CategoryFormContext";

export default function Page() {
  const {
    data,
    isLoading,
    error,
    isDone,
    handleData,
    handleCreate,
    handleUpdate,
    handleDelete,
    image,
    setImage,
    fetchData,
  } = useCategoryForm();

  return (
    <main className="w-full p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Category Form</h1>

      <form
        className="space-y-5 bg-dark p-6 rounded-lg border border-primary shadow-md max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        {/* Category Name */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter category name"
            className="input input-secondary w-full"
            onChange={(e) => {
              handleData("name", e.target.value);
            }}
            value={data?.name}
            required
          />
        </div>

        {/* Slug */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter slug"
            className="input input-secondary w-full"
            onChange={(e) => {
              handleData("slug", e.target.value);
            }}
            value={data?.slug}
            required
          />
        </div>

        {image && (
          <div>
            <img className="h-40" src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
        {/* Image Upload */}
        <div className="flex flex-col gap-1">
          <label className="font-medium ">
            Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            onChange={(e) => {
              e.preventDefault();
              setImage(e.target.files[0]);
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading || isDone}
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </main>
  );
}
