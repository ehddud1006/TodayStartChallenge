import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 99px - 140px);
  background-color: #c1d0db;

  padding: 10px 12px;

  & > * + * {
    margin-top: 12px;
  }

  overflow-y: scroll;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTopIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  padding: 0 10px;

  background-color: #f8f8f8;

  border-bottom: 1px solid #e6e6e6;
`;

export const LeftIconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const RightIconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LeftIcon = styled.img`
  filter: invert(43%) sepia(3%) saturate(33%) hue-rotate(323deg);
  width: 18px;
  height: 18px;
`;

export const RigthIcon = styled.img`
  filter: invert(43%) sepia(49%) saturate(0%) hue-rotate(301deg);
  width: 18px;
  height: 18px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 12px;

  width: 100%;
  height: 100px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #b2b2b2;
  letter-spacing: 0.2px;

  width: 80px;
  height: 70px;

  background-color: #f9f9f9;
  border: 1px solid #ececec;
  border-radius: 4px;
`;

export const DateNoticeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const DateNoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 185px;
  height: 25px;

  background-color: #b7c5d0;
  border-radius: 20px;

  font-size: 13px;

  padding-top: 2px;
`;

export const DateNotice = styled.span`
  padding-left: 7px;
`;

export const ChatCalendarIcon = styled.img`
  width: 15px;
  height: 17px;

  padding-bottom: 2px;
`;

export const MyTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MyText = styled.span`
  max-width: 75%;

  margin: 5px 0;

  padding: 7px 10px 5px 10px;

  font-size: 13px;
  line-height: 18px;
  word-wrap: break-word;

  background-color: #fbe54d;
  border-radius: 3px;
`;

export const MyTextShortCotainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 75%;

  margin: 5px 0;

  padding: 7px 10px 5px 10px;

  font-size: 13px;
  line-height: 18px;
  word-wrap: break-word;

  background-color: #fbe54d;
  border-radius: 3px;
`;

export const MyTextShort = styled.span``;

export const VisibleTotal = styled.span`
  font-size: 11px;
`;

export const SendTime = styled.span`
  align-self: flex-end;

  color: #5d6469;
  font-size: 12px;
  padding: 0 7px 0 0;
`;

export const CounterTextContainer = styled.div`
  display: flex;
  gap: 5px;

  width: 100%;
`;

export const CounterProfileImage = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 40%;
`;

export const CounterNameAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: calc(75% - 54px);
  width: fit-content;
`;
export const CounterName = styled.span`
  color: #5d6469;
  font-size: 13px;
`;

export const CounterText = styled.span`
  max-width: 100%;
  width: fit-content;
  margin: 5px 0;

  padding: 7px 10px 5px 10px;

  font-size: 13px;
  line-height: 18px;
  word-wrap: break-word;

  background-color: #ffffff;
  border-radius: 3px;
`;

export const ChatImage = styled.img`
  width: 200px;
  height: 200px;

  margin-top: 7px;

  border-radius: 3px;
  object-fit: cover;
`;
