import { ChangeEvent, FC, ReactNode, useRef } from 'react';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div
      onClick={() => {
        inputRef.current?.click();
      }}
    >
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={onChangeHandler}
      />
      {children}
    </div>
  );
};

export default FileUpload;
