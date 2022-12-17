import React, { FC } from 'react';

export interface TrackProgressProps {
  value: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ value, right, onChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={0}
        max={right}
        value={value}
        onChange={onChange}
      />
      <div>
        {value} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
