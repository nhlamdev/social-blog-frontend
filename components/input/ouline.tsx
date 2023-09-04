interface OutlineInputComponentProps {
  txt: string;
  change: (txt: string) => void;
}

export const OutlineInputComponent = (props: OutlineInputComponentProps) => {
  const { change, txt } = props;
  return (
    <div className="flex flex-row justify-end gap-5">
      <label className="relative block  w-full">
        <span className="sr-only">Search</span>

        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 
          rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
          focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs sm:text-sm"
          placeholder="Nhập từ khoá..."
          type="text"
          value={txt}
          name="search"
          onChange={(e) => {
            const { value } = e.target;
            change(value);
          }}
        />
      </label>
    </div>
  );
};
