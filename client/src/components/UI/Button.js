import styled, { css } from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.7em 1em;
  margin: 5px;
  outline: 0;
  border-radius: 3px;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      border-radius: 100px;
      font-size: 14px;
      line-height: 20px;
      padding: 6px 16px;
      text-align: center;
      color: #fff;
      background-color: #1da1f2;
    `}
`;

export const SignoutButton = styled.button`
  color: black;
  font-weight: normal;
  width: 100%;
  display: block;
  border-radius: 0px;
  padding: 12px;
`;

export const EditProfileButton = styled(Button)`
  border: 1px solid #67757f;
  color: #67757f;
  background-color: #fff;
  align-self: flex-end;
`;

export const FollowProfileButton = styled(EditProfileButton)`
  background-color: #f34c79;
  color: #fff;
  border: none;

  &:hover {
    background-color: #e23d69;
  }
`;
