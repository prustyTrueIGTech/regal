<!-- folder structure -->
src/
│ ├── app/
│ │    ├── home/
│ │    │   └── page.jsx
│ │    ├── favicon.ico
│ │    ├── global.css
│ │    ├── layout.js
│ │    └── page.js  
│ │    │ 
│ │    ├── components/
│ │    │   ├── Home/
│ │    │   │   └── index.jsx
│ │    │   │   ├── components/
│ │    │   │   │   ├── Banner/
│ │    │   │   │   │   └── index.jsx  
│ │    │   │   │   ├── Header/
│ │    │   │   │   │   └── index.jsx 
│ │    │   │   │   ├── Login/
│ │    │   │   │   │   └── index.jsx 
│ │    │   │   │   ├── Register/
│ │    │   │   │   │   └── index.jsx 
│ │    │   │   │   ├── Spinner_Roller/
│ │    │   │   │   │   └── index.jsx 
│ │    │   │   ├── constants/
│ │    │   │   │   └── index.jsx 
│ │    │   │   ├── hooks/
│ │    │   │   │   ├── useCoinToggler.js
│ │    │   │   │   ├── useCommonContext.js
│ │    │   │   │   ├── useNavBar.js
│ │    │   │   │   └── useHome.js
│ │    │   ├── ui/
│ │    │   │   ├── avatar.jsx
│ │    │   │   ├── button.jsx
│ │    │   │   ├── carousel.jsx
│ │    │   │   ├── input.jsx
│ │    │   │   ├── scroll-area.jsx
│ │    │   │   ├── separator.jsx
│ │    │   │   ├── sheet.jsx
│ │    │   │   ├── sidebar.jsx
│ │    │   │   ├── skeleton.jsx
│ │    │   │   ├── text.jsx
│ │    │   │   └── tooltip.jsx 
│ │    ├── hooks/
│ │    │   └── use-mobile.jsx 
│ │    │   ├── lib/
│ │    │   │   ├── responsiveStyles.js
│ │    │   │   └── utils.js
│ │    │   ├── services/
│ │    │   │   └── axios.js
│ │    │   ├── store/
│ │    │   │   ├── reducers
│ │    │   │   │   └── index.js
│ ├── .env




│ ├── services/
│ ├── store/
│ ├── .env
     
 

│   ├── Home.jsx              ← Check exports here (default or named export)
│   ├── Header.jsx
│   └── Footer.jsx


│   ├── index.js (or index.jsx) ← Check imports and render method here
│   ├── _app.js
│   └── api/
│       └── hello.js
│

│   ├── globals.css
│   └── Home.module.css
│
├── public/
│   └── (static assets)
│
├── package.json
└── next.config.js

