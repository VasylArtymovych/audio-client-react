import React, { FC } from 'react';

export interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
