import {
  createContext,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState
} from "react"

import type { DrupalContentTranslation } from "@/types/index"

type ContextProps = {
  contentTranslationsContextState?: DrupalContentTranslation[]
  setContentTranslationsContextState: Dispatch<
    SetStateAction<DrupalContentTranslation[]>
  >
}

type ContextProviderProps = {
  children?: ReactNode
}

const defaultValue: ContextProps = {
  contentTranslationsContextState: [],
  setContentTranslationsContextState: () => void {}
}

export const ContentTranslationsContext =
  createContext<ContextProps>(defaultValue)

export const ContentTranslationsContextProvider: FC<ContextProviderProps> = ({
  children
}) => {
  const [contentTranslationsContextState, setContentTranslationsContextState] =
    useState(Array<DrupalContentTranslation>)

  return (
    <ContentTranslationsContext.Provider
      value={{
        contentTranslationsContextState,
        setContentTranslationsContextState
      }}
    >
      {children}
    </ContentTranslationsContext.Provider>
  )
}

export const useContentTranslationsContext = () =>
  useContext(ContentTranslationsContext)
