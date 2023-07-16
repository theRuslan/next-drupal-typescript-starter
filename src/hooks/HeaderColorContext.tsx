import { createContext, useContext, useState } from "react"

type HeaderColorContext = {
  color: string
  updateColor: (color: string) => void
}

export const initialColor = "black"
export const secondColor = "white"

export const HeaderColorContext = createContext<HeaderColorContext>({
  color: initialColor,
  updateColor: () => void {}
})

export const HeaderColorContextProvider = (prop: {
  value?: string
  children: JSX.Element | JSX.Element[]
}) => {
  const [color, setColor] = useState<string>(prop.value || initialColor)

  const updateColor = (color: string) => {
    setColor(color)
  }

  return (
    <HeaderColorContext.Provider value={{ color, updateColor }}>
      {prop.children}
    </HeaderColorContext.Provider>
  )
}

export const useHeaderColor = () =>
  useContext(HeaderColorContext) as HeaderColorContext

export default useHeaderColor
