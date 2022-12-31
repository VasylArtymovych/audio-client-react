import { ChangeEvent, FC, ReactNode, useRef } from 'react';
import { InputWraper } from './FileUpload.styled';

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
    <InputWraper
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
    </InputWraper>
  );
};

export default FileUpload;
