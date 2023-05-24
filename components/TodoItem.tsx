"use client";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};
export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-0.5 items-center p-1 py-2text-2xl justify-between border-b-2 border-slate-600">
      <div>
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer mr-2"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        ></input>
        <label
          htmlFor={id}
          className="peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <div className="m-1">
        <span
          className="p-2 text-slate-200 border border-blue-950 text-slate-90 text-sm hover:bg-red-400 cursor-pointer"
          onClick={(e) => deleteTodo(id)}
        >
          Delete
        </span>
      </div>
    </li>
  );
}
