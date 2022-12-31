import { useTimeConvertor } from 'hooks';
import React, { FC } from 'react';

export interface TrackProgressProps {
  value: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  time?: boolean;
}

const TrackProgress: FC<TrackProgressProps> = ({
  value,
  right,
  onChange,
  time,
}) => {
  const { convertSec } = useTimeConvertor();

  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={0}
        max={right}
        value={value}
        onChange={onChange}
      />
      {time ? (
        <div>
          {convertSec(value).minutes}:{convertSec(value).seconds} /{' '}
          {convertSec(right).minutes}:{convertSec(right).seconds}
        </div>
      ) : (
        <div>
          {value} / {right}
        </div>
      )}
    </div>
  );
};

export default TrackProgress;
