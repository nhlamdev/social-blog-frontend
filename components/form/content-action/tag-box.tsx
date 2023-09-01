import React, { useState } from "react";

interface TagInputProps {
  tags: string[];
  change: (tags: string[]) => void;
}

export const ContentActionTagsBox: React.FC<TagInputProps> = (props) => {
  const { change, tags } = props;
  const [textInput, setTextInput] = useState<string>("");
  // const [tags, setTags] = useState<string[]>(["test"]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleAddTag = () => {
    if (textInput.trim() === "") return;
    change([...tags, textInput.trim()]);
    setTextInput("");
  };

  const handleRemoveTag = (tag: string) => {
    change(tags.filter((t) => t !== tag));
  };

  return (
    <div className="relative">
      <input
        className="appearance-none block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter some tags"
        value={textInput}
        onChange={handleInputChange}
      />
      <div
        style={{
          display: textInput && textInput.length !== 0 ? "block" : "none",
        }}
      >
        <div className="absolute z-40 left-0 mt-2 w-full">
          <div className="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
            <a
              className="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white"
              onClick={handleAddTag}
            >
              Add tag <span className="font-semibold">{textInput}</span>
            </a>
          </div>
        </div>
      </div>
      {/* selections */}
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-blue-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden"
        >
          <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">
            {tag}
          </span>
          <button
            className="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none"
            onClick={() => handleRemoveTag(tag)}
          >
            <svg
              className="w-6 h-6 fill-current mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};
