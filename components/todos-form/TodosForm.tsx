import { FC } from "react";

export const TodosForm: FC = () => {
  return (
    <form className="flex h-full flex-1 flex-col gap-3 rounded border bg-white p-3 ">
      <input className="rounded-lg border p-2" placeholder="Title" type="text" />
      <input className="rounded-lg border p-2" placeholder="Description" type="text" />
      <button
        className="text-l rounded-lg bg-violet-500 p-2 text-white hover:bg-violet-600"
        type="submit">
        Add
      </button>
    </form>
  );
};
