import React from "react";

import type { Dispatch, SetStateAction } from "react";

export type ContextTranslationProps = {
  label: string;
  langcode: string;
  path: string;
};

export type ContentTranslationsContextProps = {
  contentTranslationsContextState?: ContextTranslationProps[];
  setContentTranslationsContextState: Dispatch<SetStateAction<undefined>>;
};

type CTCPProps = {
  children: React.ReactNode;
};

const defaultValue: ContentTranslationsContextProps = {
  contentTranslationsContextState: [],
  setContentTranslationsContextState: () => {},
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
