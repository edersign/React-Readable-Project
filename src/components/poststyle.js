import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Calendar } from '../images/calendar.svg';
import { ReactComponent as Message } from '../images/message-circle.svg';
import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { ReactComponent as Delete } from '../images/delete.svg';

export const Article = styled.article`
  position: relative;
  margin-bottom: 40px;
  background-color: #fff;
  display: flex;
  flex: 1 1 auto;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  filter: none;
  box-shadow: none;
  transition: all 0.2s ease-out;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
`;

export const PostSummary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
`;

export const PostMeta = styled.div`
  width: calc(100% - 60px);
  background: #f8f9fa;
  color: #678;
  border-top: solid 1px rgba(102, 119, 136, 0.05);
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 20px 30px;
  justify-content: space-between;
`;
export const Timestamp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 auto;
  color: rgba(50, 59, 64, 0.8);
  font-weight: 500;
  text-align: center;
`;
export const Author = styled(Timestamp)``;
export const Comments = styled(Timestamp)``;
export const IconCalendar = styled(Calendar)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: #999;
`;
export const IconMessage = styled(Message)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: #999;
`;
export const IconUser = styled(User)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: #999;
`;
export const PostTitle = styled.h3`
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;
export const PostTitleLink = styled(Link)`
  color: #454545;
  text-decoration: none;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

export const PostBody = styled.p`
  margin: 0 40px 30px 40px;
`;

export const CategoriesWrap = styled.div`
  margin: 0 20px 10px;
`;

export const CategoriesLink = styled(Link)`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  background-color: rgba(9, 30, 66, 0.04);
  color: rgb(0, 82, 204);
  border-radius: 3px;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  align-items: baseline;
  transform: translate3d(0, 0, 0);
  filter: none;
  box-shadow: none;
  transition: all 0.2s ease-out;
  border-radius: 3px;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
  }
`;
export const PostEdit = styled.div`
  display: flex;
`;
export const PostEditOption = styled(Link)`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  background-color: rgba(9, 30, 66, 0.04);
  color: rgb(0, 82, 204);
  border-radius: 3px;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.2s ease-out;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 2px 0 0;
  background-color: #F1F5F8;
    color: #183247;
    border: 1px solid #dadfe3;
  &:hover {
    background-color: #B8C2CC;
  }
`;
export const PostEditOptionDelete = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  border-radius: 3px;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.2s ease-out;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #ffecf0;
  color: #c82124;
  border: 1px solid #ffd0d6;

  &:hover {
    background: #E3342F;
    color: #fff;
  }
`;
export const IconEdit = styled(Edit)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
export const IconDelete = styled(Delete)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
