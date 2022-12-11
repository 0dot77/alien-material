import { useRef } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageState } from '../data/atom';

const TimerContainer = styled.div`
  width: 10mvw;
  position: relative;
  margin-right: 2rem;
`;

const Digits = styled.span`
  color: #ffffff;
`;

export default function Timer() {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const time = useRef(300);
  const timerRef = useRef();
  const [isHuman, setIsHuman] = useRecoilState(pageState);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    // reset time and reset assets
    const timeout = setTimeout(() => {
      setIsHuman((prev) => !prev);
      time.current = 300;
    }, 300000);

    return () => {
      clearInterval(timerRef.current);
      clearTimeout(timeout);
    };
  }, [isHuman]);

  //   useEffect(() => {
  //     if (time.current <= 0) {
  //       clearInterval(timerRef.current);
  //       setMin(1);
  //       setSec(0);

  //     }
  //   }, [sec]);

  return (
    <TimerContainer ref={timerRef}>
      <Digits>
        {min}분 {sec}초
      </Digits>
    </TimerContainer>
  );
}
