# src/stores

The stores directory should contain files relating to global data stores (redux, zystand, ...). You can view the outcome in the browser console to experiment with "redux" or "zustand"

> You can remove all the files related to the state manager you are not using, as well as the dependencies:

## redux

**Files**

```
src/components/demo/Demo.tsx
src/hooks/redux.ts
src/store/redux/*
src/main.tsx
```

**Dependencies**

```bash
bun remove @reduxjs/toolkit react-redux
```

## zustand

**Files**

```
src/components/demo/Demo.tsx
src/store/zustand/*
```

**Dependencies**

```bash
bun remove zustand
```
