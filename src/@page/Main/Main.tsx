import { css } from '@emotion/react';
import { useRef } from 'react';

import Header from '@/@components/Header';
import PageTemplate from '@/@components/PageTemplate';
import calendarImage from '@/assets/images/calendar.png';
import callImage from '@/assets/images/call.png';
import chatCalendarImage from '@/assets/images/chatCalendar.png';
import chatPhoto from '@/assets/images/chatPhoto/index';
import clipImage from '@/assets/images/clip.png';
import anonymous from '@/assets/images/devJeans';
import svelteJeansImage from '@/assets/images/devJeans/svelteJeans.jpg';
import faceTimeImage from '@/assets/images/faceTime.png';
import smileImage from '@/assets/images/smile.png';
import streamImage from '@/assets/images/stream.png';
import makeSection from '@/utils/makeSection';

import data from './data';
import * as Styled from './Main.styles';

const WEEKDAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const MainPage = () => {
  const photoNumber = useRef<number>(0);

  const section = Object.entries(makeSection(data));

  const temp = section.reduce((acc, cur) => {
    const [year, month, date] = cur[0].split('-');
    const inputDate = new Date(cur[0]);
    const weekdayName = WEEKDAYS[inputDate.getDay()];

    const temp = [
      ...acc,
      <Styled.DateNoticeWrapper key={cur[0]}>
        <Styled.DateNoticeContainer>
          <Styled.ChatCalendarIcon src={chatCalendarImage} alt='채팅 달력 아이콘' />
          <Styled.DateNotice>{`${year}년 ${month}월 ${date}일 ${weekdayName}`}</Styled.DateNotice>
        </Styled.DateNoticeContainer>
      </Styled.DateNoticeWrapper>,
    ];

    cur[1].forEach(item => {
      const hour = Number(item.Date.slice(11, 13));
      const behindHour = item.Date.slice(13, 16);
      const ampm = hour >= 12 ? '오후 ' : '오전 ';
      const hour12 = hour >= 13 ? String(hour - 12).padStart(2, '0') : hour;

      if (item.Message === '사진') {
        temp.push(
          item.User === '김동영' ? (
            <Styled.MyTextContainer key={item.Date + item.User + item.Message}>
              <Styled.SendTime>{ampm + hour12 + behindHour}</Styled.SendTime>
              <Styled.ChatImage src={chatPhoto[photoNumber.current]} />
            </Styled.MyTextContainer>
          ) : (
            <Styled.CounterTextContainer key={item.Date + item.User + item.Message}>
              <Styled.CounterProfileImage src={anonymous[item.User][1]} alt='프로필 이미지' />
              <Styled.CounterNameAndTextContainer>
                <Styled.CounterName>{anonymous[item.User][0]}</Styled.CounterName>
                <Styled.ChatImage src={chatPhoto[photoNumber.current]} />
              </Styled.CounterNameAndTextContainer>
              <Styled.SendTime>{ampm + hour12 + behindHour}</Styled.SendTime>
            </Styled.CounterTextContainer>
          )
        );
        photoNumber.current += 1;
      }

      if (item.Message !== '사진')
        temp.push(
          item.User === '김동영' ? (
            <Styled.MyTextContainer key={item.Date + item.User + item.Message}>
              <Styled.SendTime>{ampm + hour12 + behindHour}</Styled.SendTime>
              {item.Message.length > 460 ? (
                <Styled.MyTextShortCotainer>
                  <Styled.MyTextShort>{item.Message.slice(0, 460) + '...'}</Styled.MyTextShort>
                  <Styled.VisibleTotal>전체보기</Styled.VisibleTotal>
                </Styled.MyTextShortCotainer>
              ) : (
                <Styled.MyText>{item.Message}</Styled.MyText>
              )}
            </Styled.MyTextContainer>
          ) : (
            <Styled.CounterTextContainer key={item.Date + item.User + item.Message}>
              <Styled.CounterProfileImage src={anonymous[item.User][1]} alt='프로필 이미지' />
              <Styled.CounterNameAndTextContainer>
                <Styled.CounterName>{anonymous[item.User][0]}</Styled.CounterName>
                <Styled.CounterText>{item.Message}</Styled.CounterText>
              </Styled.CounterNameAndTextContainer>
              <Styled.SendTime>{ampm + hour12 + behindHour}</Styled.SendTime>
            </Styled.CounterTextContainer>
          )
        );
    });

    return temp;
  }, [] as JSX.Element[]);

  return (
    <PageTemplate>
      <Header />
      <Styled.Body>{temp.map(item => item)}</Styled.Body>
      <Styled.FooterContainer>
        <Styled.FooterTopIconContainer>
          <Styled.LeftIconContainer>
            <Styled.LeftIcon src={smileImage} alt='웃는 아이콘' />
            <Styled.LeftIcon src={clipImage} alt='클립 아이콘' />
            <Styled.LeftIcon src={calendarImage} alt='달력 아이콘' />
          </Styled.LeftIconContainer>

          <Styled.RightIconContainer>
            <Styled.RigthIcon
              css={css`
                width: 20px;
                height: 20px;
              `}
              src={streamImage}
              alt='라이브 아이콘'
            />
            <Styled.RigthIcon src={callImage} alt='전화 아이콘' />
            <Styled.RigthIcon src={faceTimeImage} alt='화상전화 아이콘' />
          </Styled.RightIconContainer>
        </Styled.FooterTopIconContainer>
        <Styled.TextContainer>
          <Styled.Button>전송</Styled.Button>
        </Styled.TextContainer>
      </Styled.FooterContainer>
    </PageTemplate>
  );
};

export default MainPage;
