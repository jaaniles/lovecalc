# Next.JS Boilerplate

Next.js boilerplate with React 17, emotion, react-query and typescript

## PLEASE READ / INITIAL SETUP

#### ENSURE YOU HAVE THE FOLLOWING

- Node 15
- Typescript ^4.1.2 (Projact has this dependency) for React 17
- Use Typescript of this project (bottom right and change typescript version to the one in this project)
- Read section `Developing project` below

## Developing project

1. Populate `.env` file with values found in `.env.example`
2. `yarn`
3. `yarn dev`

## Adding react-query hooks

```
└─CarPage
  ├── CarPage.tsx
  └── carQueries.ts
```

1. Create request function in `carQueries.ts`
```typescript
import { api } from "~/api";

export enum CarKey {
  CAR = "car",
}

type CarInMemoryKey = {
  title: strig;
  id: number;
};

type CarResult = {
  event: EventResponse;
};

export const getCar = (opts: { carId: string }) => async () => {
  const { data } = await api.get<CarResult>(`/cars/${opts.carId}`);

  return data;
};

```

2. Create a hook in your component in `CarPage.tsx`
```typescript
import { useQuery } from "react-query";

const CarPage: FC = () => {
  const { isLoading, data } = useQuery(
    // `carId` is a dynamic parameter
    [CarInMemoryKey.CAR, carId],
    getCar({ carId }),
  );

  return ...
}
```

- `[SubredditKey.SUBREDDIT, subreddit]` is cache key. 
  Field can take numbers, string and **arrays** with dynamic values.
- Read more at https://react-query.tanstack.com/docs/api#querycache


## Adding new translations for messages

```tsx
const messages = defineMessages({
  example: {
    id: "example",
    defaultMessage: "Example"
  }
})

const Example = () => (
  <div>
    <FormattedMessage {...messages.example} />
  </div>
);
```

2. `yarn extract-messages`


## Adding new language for translation

- Add a `.json` file in `/src/translations/[language].json` E.g. `en.json`

- Add Locale to `/src/@types/locale.ts`


## Project structure

```
└─src
  ├── @types
        Global styles
  ├── assets
        Contains images and svgs
  ├── atoms
        Base bulding blocks
  ├── molecules
        Bulding blocks for sites
  ├── organisms
        Site specific sets
  ├── pages
        Site structure
  ├── pagesWithContext
        Pages with `react-query` and other related components
  ├── providers
        App global contexts
  └── translations
        Contains translations for languages
```
