import { institutionImgPngs, institutionImgWebps } from '../assets/institution';
import { institutionPersonPngs, institutionPersonWebps } from '../assets/institutionPerson';
import { logosPngs, logosWebps } from '../assets/institutionLogo';

/**
 * list[webp, png]
 */
const institutionsData = {
  boltFamily: {
    logo: logosPngs[0],
    institutionPerson: [institutionPersonWebps[0], institutionPersonPngs[0]],
    institutionImg: [institutionImgWebps[0], institutionImgPngs[0]],
    textState: ['header', 'contents'],
    texts: ['Bolt Family (볼트 가문)', '후원기관 sponsoring organization'],
  },
  boltCenter: {
    logo: logosPngs[1],
    institutionPerson: [institutionPersonWebps[1], institutionPersonPngs[1]],
    institutionImg: [institutionImgWebps[1], institutionImgPngs[1]],
    textState: ['header', 'header', 'contents', 'contents'],
    texts: [
      'BOLT Institute of the earth’s defense with AMRP command center',
      '(볼트 지구 방위 연구소 : AMPR 중앙통제센터)',
      'Central control agency that runs an Alien Matter Research Program(AMRP)',
      '외계물질 관찰 프로그램(AMPR)을 실행하는 중앙 통제 기관',
    ],
  },
  genetica: {
    logo: logosPngs[2],
    institutionPerson: [institutionPersonWebps[2], institutionPersonPngs[2]],
    institutionImg: [institutionImgWebps[2], institutionImgPngs[2]],
    textState: ['header', 'header', 'contents', 'contents', 'contents', 'contents'],
    texts: [
      'GENERTICA LIBERTY (제네티카 레버티)',
      'Dr. Casero Hugo, Ph.D in Genetics (카세로 위고 박사, 유전학 박사)',
      'Genetic analysis of extraterrestrial substances and extraterrestrial life, and biological research institutes',
      'Study the possibility of synthesis of genes of extraterrestrial substances and human genes.',
      '외계물질과 외계생명체의 유전자 분석, 생물학적 연구 기관.',
      '외계물질의 유전자와 인간의 유전자의 합성 가능성을 연구.',
    ],
  },
  apac: {
    logo: logosPngs[3],
    institutionPerson: [institutionPersonWebps[3], institutionPersonPngs[3]],
    institutionImg: [institutionImgWebps[3], institutionImgPngs[3]],
    textState: ['header', 'header', 'contents', 'contents'],
    texts: [
      'Applied Physics AMRP Center(APAC)',
      'Dr. Robert Zimmer, Ph.D in Physics (로버트 짐머 박사, 물리학 박사)',
      "Development of AMRP's overall physical dynamics structure for robots, spacecraft, and military weapons.",
      'AMRP의 로봇, 우주선, 군사무기 전반  물리학적 역학 구조 개발.',
    ],
  },
  mecha: {
    logo: logosPngs[4],
    institutionPerson: [institutionPersonWebps[4], institutionPersonPngs[4]],
    institutionImg: [institutionImgWebps[4], institutionImgPngs[4]],
    textState: ['header', 'header', 'contents', 'contents'],
    texts: [
      'Mecha:(L) (메카라지)',
      'James Banks, Chairman (회장 제임스 뱅크스)',
      'Space Age New Weapons Development and Training Agency',
      '우주시대 신무기 개발 및 양성 기관',
    ],
  },
  chocheng: {
    logo: logosPngs[5],
    institutionPerson: [institutionPersonWebps[5], institutionPersonPngs[5]],
    institutionImg: [institutionImgWebps[5], institutionImgPngs[5]],
    textState: ['header', 'header', 'contents', 'contents'],
    texts: [
      'Cho Chang Academy of AMRP(초챙 암프 아카데미)',
      'Dr. Alperen Cho Chang, Principal (교장, 알페렌 초챙 박사)',
      'AMRPian training institute. The contents of the training are confidential.',
      '암프 비밀요원 교육기관. 교육내용 기밀.',
    ],
  },
  ionic: {
    logo: logosPngs[6],
    institutionPerson: [institutionPersonWebps[6], institutionPersonPngs[6]],
    institutionImg: [institutionImgWebps[6], institutionImgPngs[6]],
    textState: ['header', 'header', 'header', 'contents', 'contents'],
    texts: [
      'Unidentified substance detection IONIC energy LAB(아이오닉 에너지 연구소)',
      'Dr. Gitanjali Bindu (CTO/Chief Technology Officer)',
      '기탄질리 빈두 박사 (연구소장)',
      'A Study on the IONIC Energy Suppressing the Growth of Alien matters.',
      '외계물질의 성장을 억제하는 IONIC 에너지에 관한 연구.',
    ],
  },
  seti: {
    logo: logosPngs[7],
    institutionPerson: [institutionPersonWebps[7], institutionPersonPngs[7]],
    institutionImg: [institutionImgWebps[7], institutionImgPngs[7]],
    textState: ['header', 'header', 'header', 'contents', 'contents'],
    texts: [
      'The SETI Institute',
      'SETI; Search for Extra-Terrestrial Intelligence(외계 지적생명탐사 연구소)',
      'Dr. Daphne Fernández, Ph.D in Electromagnetism‎ (다프네 페르난데스 박사, 전자기학 박사)',
      'Radio frequency signal detection analysis; Passive extraterrestrial intelligence exploration',
      '무선 주파수 신호 탐지 분석; 수동적 외계 지능 탐사',
    ],
  },
};

export default institutionsData;
