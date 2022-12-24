import axios from 'axios';
import { IComment, ICommentDto } from 'types/tracks';

export const addComment = (data: ICommentDto): Promise<IComment> => {
  return axios
    .post<IComment>('tracks/comment', { ...data })
    .then(({ data }) => data);
};
