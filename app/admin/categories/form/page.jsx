"use client";

export default function Page() {
  return (
    <main className="w-full p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Category Form</h1>

      <form
        className="space-y-5 bg-dark p-6 rounded-lg border border-primary shadow-md max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
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
            required
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-1">
          <label className="font-medium ">
            Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
