"use client";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-0.5 items-center p-1 text-2xl">
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
    </li>
  );
}
