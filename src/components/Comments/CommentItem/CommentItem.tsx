import React from 'react';
import { IComment } from 'types/tracks';
import { Container } from './CommentItem.styled';

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <Container>
      <div>
        <span>Author:</span> {comment.username}
      </div>
      <div>
        <span>Comment:</span> {comment.text}
      </div>
    </Container>
  );
};

export default CommentItem;
