import React, { useEffect, useState } from 'react';

const App = () => {

  const [previewAvater, setPreviewAvater] = useState();

  useEffect(() => {
    return () => {
      previewAvater && URL.revokeObjectURL(previewAvater);
    };
  }, [previewAvater]);

  const handlePreviewAvater = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    console.log(file);

    setPreviewAvater(file.preview);
  }

  return (
    <div>
      <input
        type={"file"}
        onChange={handlePreviewAvater}
      />
      <div>

        {previewAvater &&
          // eslint-disable-next-line jsx-a11y/alt-text
          <img src={previewAvater} />
        }
      </div>
    </div>
  );
}

export default App;
