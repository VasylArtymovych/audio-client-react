import React from 'react';
import { ITrack } from 'types/tracks';
import CommentItem from '../CommentItem';

interface CommentListProps {
  track: ITrack;
}

const CommentList = ({ track }: CommentListProps) => {
  return (
    <div>
      {track.comments.map((comment) => {
        return <CommentItem comment={comment} key={comment._id} />;
      })}
    </div>
  );
};

export default CommentList;
