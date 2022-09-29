import { useState, useEffect } from 'react'

interface IProps {
  textKeywords?: string
  onChange: (value: any) => void
  error?: any
}

const InputAddOptions = ({ textKeywords, onChange, ...props }: IProps) => {
  const [keywords, setKeywords] = useState<any>([])
  const [text, setText] = useState('')

  const addOptions = () => {
    if (!text) return

    const value = keywords.find((elem: any) => elem === text)
    if (!value) {
      setKeywords([...keywords, text])
      setText('')
      onChange(keywords.toString())
    }
  }

  useEffect(() => {
    onChange(keywords.toString())
  }, [keywords])

  useEffect(() => {
    if (textKeywords) {
      setKeywords(textKeywords.split(','))
    }
  }, [])

  return (
    <div>
      <div className=" relative ">
        <input
          type="text"
          className="border peer bg-transparent outline-none w-full h-full p-4 border-primary-600  border-b-2 rounded-tr-md rounded-tl-md"
          placeholder="Ingrese una Keyword"
          onChange={(e) => setText(e.target.value.trim())}
          value={text}
        />
        <div
          className="absolute right-0 top-0 text-white flex items-center text-2xl bg-primary-600   h-full rounded-tr-md px-3 cursor-pointer"
          onClick={addOptions}>
          +
        </div>
      </div>

      <div className="flex  my-2 gap-2 flex-wrap">
        {keywords.length > 0 &&
          keywords?.map((value: any, index: number) => {
            return (
              <div key={index} className="relative border border-primary-600 rounded-md">
                <p className="pl-3 pr-10 py-2 text-sm text-primary-700">{value}</p>
                <p
                  className="absolute flex justify-center items-center cursor-pointer text-sm text-primary-600 border-l-primary-600 border-l h-full px-2 right-0 top-0"
                  onClick={() => {
                    const newArray = keywords.filter((elem: any) => elem !== value)
                    setKeywords([...newArray])
                  }}>
                  x
                </p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default InputAddOptions
