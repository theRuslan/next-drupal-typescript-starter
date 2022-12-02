import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

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
  children: ReactNode;
};

const defaultValue: ContentTranslationsContextProps = {
  contentTranslationsContextState: [],
  setContentTranslationsContextState: () => {},
};

export const ContentTranslationsContext =
  createContext<ContentTranslationsContextProps>(defaultValue);

export const ContentTranslationsContextProvider: FC<CTCPProps> = ({
  children,
}) => {
  const [contentTranslationsContextState, setContentTranslationsContextState] =
    useState();

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
  useContext(ContentTranslationsContext);
