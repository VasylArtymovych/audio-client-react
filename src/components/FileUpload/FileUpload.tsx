import { ChangeEvent, FC, ReactNode, useRef } from 'react';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
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
