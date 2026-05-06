// 다국어 번역 데이터 객체 (한글/영문)
const translations = {
  ko: {
    title: '나의 개발 블로그 포트폴리오',
    logo: 'My Dev Blog',
    menu1: 'About Me',
    menu2: 'Tech Stack',
    menu3: 'Features',
    menu4: 'Blog Posts',
    menu5: 'Contact',
    sec1_title: '빠른 링크',
    sec1_desc: '제가 주로 활동하는 채널입니다.',
    link1: 'GitHub',
    link3: '이력서',
    link5: '이메일',
    sec2_title: '나의 기술 스택',
    tech1: 'React & Vue',
    tech2: 'Vanilla JS',
    tech3: 'HTML / CSS',
    tech4: 'SCSS / Tailwind',
    more: '자세히 보기 +',
    sec3_quote: '사용자 경험을 생각하는 <br class="desk-hidden" />프론트엔드 개발자입니다.',
    sec4_title: '프로젝트 소개',
    intro1: '소개글',
    intro2: '아키텍처',
    intro3: '핵심 코드',
    intro4: '배포(CI/CD)',
    intro5: '로드맵',
    sec5_title: '주요 블로그 포스트',
    post1_tab: '반응형 웹 디자인이란?',
    post2_tab: 'JavaScript ES6+ 핵심 문법',
    post3_tab: '성능 최적화 가이드',
    post4_tab: '웹 접근성 높이기',
    post1_title: '반응형 웹 디자인 적용기',
    post1_desc: '다양한 디바이스에서 최적의 뷰를 제공하기 위해 미디어 쿼리와 유연한 그리드를 적용한 경험을 공유합니다.',
    post2_title: 'JavaScript ES6+ 활용',
    post2_desc: '최신 자바스크립트 문법(Arrow Function, Destructuring, async/await 등)을 활용하여 코드를 개선한 사례입니다.',
    post3_title: '웹 성능 최적화 경험',
    post3_desc: '이미지 지연 로딩(Lazy Loading) 및 리소스 압축을 통해 페이지 로딩 속도를 크게 개선한 방법을 다룹니다.',
    post4_title: '접근성을 고려한 마크업',
    post4_desc: '모든 사용자가 동등하게 정보를 얻을 수 있도록 시맨틱 태그와 WAI-ARIA를 적용한 과정을 소개합니다.',
    read_more: '자세히 보러가기',
    footer_addr: '[00000] 서울시 어딘가 코딩하는 방 101호',
    footer_tel: '대표전화 : 010 - 1234 - 5678',
    footer_fax: '팩스 : 02 - 123 - 4567',
    footer_email: '이메일 : dev@myblog.com',
  },
  en: {
    title: 'My Dev Blog Portfolio',
    logo: 'My Dev Blog',
    menu1: 'About Me',
    menu2: 'Tech Stack',
    menu3: 'Features',
    menu4: 'Blog Posts',
    menu5: 'Contact',
    sec1_title: 'Quick Links',
    sec1_desc: 'Channels where I am mostly active.',
    link1: 'GitHub',
    link3: 'Resume',
    link5: 'Email',
    sec2_title: 'My Tech Stack',
    tech1: 'React & Vue',
    tech2: 'Vanilla JS',
    tech3: 'HTML / CSS',
    tech4: 'SCSS / Tailwind',
    more: 'View Details +',
    sec3_quote: 'A frontend developer <br class="desk-hidden" />who cares about user experience.',
    sec4_title: 'Project Overview',
    intro1: 'Introduction',
    intro2: 'Architecture',
    intro3: 'Core Code',
    intro4: 'Deploy (CI/CD)',
    intro5: 'Roadmap',
    sec5_title: 'Featured Blog Posts',
    post1_tab: 'What is Responsive Web?',
    post2_tab: 'JS ES6+ Core Syntax',
    post3_tab: 'Performance Optimization',
    post4_tab: 'Web Accessibility',
    post1_title: 'Applying Responsive Web Design',
    post1_desc: 'Sharing my experience of applying media queries and flexible grids to provide optimal views across various devices.',
    post2_title: 'Utilizing JavaScript ES6+',
    post2_desc: 'Case studies of improving code by utilizing the latest JavaScript syntax (Arrow Function, Destructuring, async/await, etc).',
    post3_title: 'Web Performance Optimization',
    post3_desc: 'Methods to significantly improve page loading speed through image lazy loading and resource compression.',
    post4_title: 'Accessible Markup',
    post4_desc: 'Introducing the process of applying semantic tags and WAI-ARIA so that all users can obtain information equally.',
    read_more: 'Read More',
    footer_addr: '[00000] Room 101, Coding Room, Seoul',
    footer_tel: 'Phone : 010 - 1234 - 5678',
    footer_fax: 'Fax : 02 - 123 - 4567',
    footer_email: 'Email : dev@myblog.com',
  }
};

// DOM이 완전히 로드된 후 실행되도록 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. 다국어(KOR/ENG) 처리 로직 ---
  const langBtns = document.querySelectorAll('.lang-btn');
  const i18nElements = document.querySelectorAll('[data-i18n]');

  const changeLanguage = (lang) => {
    if (!translations[lang]) return;

    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    localStorage.setItem('preferredLang', lang);
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); 
      const selectedLang = btn.getAttribute('data-lang'); 
      changeLanguage(selectedLang); 
    });
  });

  // 사용자가 설정한 기본 언어 확인, 없다면 한글(ko)로 설정
  const savedLang = localStorage.getItem('preferredLang') || 'ko';
  changeLanguage(savedLang);


  // --- 2. 모바일 햄버거 메뉴 토글 로직 ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const pcMenu = document.querySelector('.t_menu_pc');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      pcMenu.classList.toggle('active');
    });
  }


  // --- 3. 헤더 배너 자동 슬라이드 로직 (2초 간격) ---
  const sliderTrack = document.getElementById('header-slider-track');
  const barIn = document.querySelector('.bar_in');
  const totalSlides = 3; // 총 슬라이드 수 (1, 2, 3)
  let currentSlide = 0;

  // 초기 프로그레스 바 너비 설정
  if (barIn) {
    barIn.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
  }

  // 2초마다 다음 슬라이드로 이동
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    // 33.3333% 씩 왼쪽으로 이동
    const translateXValue = -(currentSlide * (100 / totalSlides));
    sliderTrack.style.transform = `translateX(${translateXValue}%)`;

    // 프로그레스 바 너비 업데이트 (1/3, 2/3, 3/3)
    if (barIn) {
      barIn.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
    }
  }, 2000);


  // --- 4. 주요 블로그 포스트 탭(Tab) 활성화 로직 ---
  const tabMenus = document.querySelectorAll('.tap_menu li');
  const tabContents = document.querySelectorAll('.tap_content .tab-pane');

  tabMenus.forEach(menu => {
    menu.addEventListener('click', () => {
      // 모든 탭 메뉴에서 active 제거
      tabMenus.forEach(m => m.classList.remove('active'));
      // 클릭한 탭 메뉴에 active 추가
      menu.classList.add('active');

      const tabIndex = menu.getAttribute('data-tab');

      // 모든 콘텐츠 탭에서 active 제거
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('data-content') === tabIndex) {
          content.classList.add('active');
        }
      });
    });
  });

});
