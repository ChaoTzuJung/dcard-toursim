This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and TypeScript template.

# Dcard Toursim
A webapp that list different tourist attractions with filter tool. 

![image](./assets/dcard-toursim.gif)

## Installation

```shell
$ git clone https://github.com/ChaoTzuJung/dcard-toursim.git
$ cd dcard-toursim
$ npm install && npm start (or using yarn instead)
```

## Features:
  - [X] Virtualized List
  - [X] Infinite Scroll
  - [X] Lazy Load
  - [X] Performance

### Virtualized List
Use `react-window` to achieve virtualized list which is a react components for efficiently rendering large lists and tabular data.As the Chrome Performance Monitor, It took less than **4.2MB JS heap size, 350 DOM** nodes on initial renderer, and of course, it's responsive. 

### Infinite Scroll && Lazy Load
Use `IntersectionObserver` API to achieve infinite scroll and only load more data while scrolling to current bottom boundary.

### Performance
In addition to lazy-loading data, dcard-reader also use react core functions to enhance app performance, such as `React.memo`、`useCallback`、`useMemo`...etc.

## File Structure
```
src
├── api
│   └── proxy.ts
├── api
│   └── index.ts
├── hook
│   └── useFetchPost.tsx
│   └── useOnClickOutside.tsx
├── pages
│   └── Home
├── components
│   └── Calendar
│   └── CardItem
│   └── CardList
│   └── Checkbox
│   └── Filter
├── types
│   └── index.ts
├── utils
│   └── helper.ts
│   └── media.ts
└── App.tsx
└── GlobalStyles.ts
└── index.tsx
└── serviceWorker.ts
```

## Todo Roadmap
  - [ ] Content Page
  - [ ] Pagination
  - [ ] Storybook
  - [ ] Unit Test
    - [ ] CI/CD Pipeline
  - [ ] Server Side Rendering

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fdcard-reader.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fdcard-reader?ref=badge_large)