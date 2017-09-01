# polestar-template

This is NKIA UI React Template.

## Quick Overview

```shell
npm install --save-dev polestar-template

cd ./node_modules/polestar-template/templates
npm start
```

### Directory Layout

```
.
├── /config/                    # Configuration for NKIA SOFTWARE PRODUCT UI
├── /template/                  # Template for NKIA SOFTWARE PRODUCT UI
└── package.json                # The list of 3rd party libraries and utilities
```

### Package Layout

```
.
├── /components/                # 공통으로 사용되는 UI 컴포넌트 패키지
├── /containers/                # 화면 패키지
│   └── /{view name}/               # 화면 이름
│       ├── /components/                # 해당 화면에서 사용하는 UI Components
│       ├── /actions.js                 # redux actions
│       ├── /constants.js               # 상수 정의
│       ├── /index.js                   # view index
│       ├── /reducer.js                 # redux reducer
│       ├── /sagas.js                   # redux-saga task
│       └── /selectors.js               # store의 값을 리턴하는 getter 함수
├── /reducers/                  # redux reducer 패키지
│   └── /index.js                   # root reducer
├── /routes/                    # router 패키지
│   ├── /index.js                   # router path 설정
│   └── /RouteWithSubRoutes.js      # sub route render
├── /sagas/                     # redux-saga 패키지
│   ├── /index.js                   # redux-saga root task
│   └── /sagaMonitor.js             # saga monitor util
├── /services/                  # service 패키지
│   ├── /{service name}/            # service 단위별 패키지
│   └── /index.js                   # service index
├── /store/                     # redux store 패키지
│   └── /configureStore.js          # store 생성 함수
├── /styles/                    # style 소스 패키지
├── index.html                  # index html file
└── index.js                    # index js file
```