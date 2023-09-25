import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
  setActiveEditorTab,
}) => {
  return (
    <div className="aipicker-container">
      <div className="flex">
        <CustomButton
          title="Close"
          customStyles="text-sm text-right"
          handleClick={() => setActiveEditorTab("")}
        />
      </div>
      <textarea
        placeholder="Ask AI..."
        row={5}
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
