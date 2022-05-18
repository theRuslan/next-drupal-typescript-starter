export type ContextTranslationProps = {
  label: string;
  langcode: string;
  path: string;
};

export type ContentTranslationsContextProps = {
  contentTranslationsContextState?: ContextTranslationProps[];
  setContentTranslationsContextState: React.Dispatch<
    React.SetStateAction<undefined>
  >;
};
