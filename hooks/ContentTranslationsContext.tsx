import React from "react";

import type { ContentTranslationsContextProps } from "types/content-translations-context";

const defaultValue: ContentTranslationsContextProps = {
  contentTranslationsContextState: [],
  setContentTranslationsContextState: () => {},
};

type CTCPProps = {
  children?: React.ReactNode;
};

export const ContentTranslationsContext =
  React.createContext<ContentTranslationsContextProps>(defaultValue);

export const ContentTranslationsContextProvider: React.FC<CTCPProps> = ({
  children,
}) => {
  const [contentTranslationsContextState, setContentTranslationsContextState] =
    React.useState();

  return (
    <ContentTranslationsContext.Provider
      value={{
        contentTranslationsContextState,
        setContentTranslationsContextState,
      }}
    >
      {children}
    </ContentTranslationsContext.Provider>
  );
};

export const useContentTranslationsContext = () =>
  React.useContext(ContentTranslationsContext);
