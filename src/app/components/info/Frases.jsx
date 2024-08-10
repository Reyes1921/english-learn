import {Clipboard} from "../clipboard/Clipboard"

export const Frases = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Palabras mas utilizadas
      </h2>
      <div className="py-1 md:px-5 text-center md:text-left text-lg">
        <Clipboard defaultValue={`Thinking`} rows={1} />
        <p>Pensando</p>
      </div>
    </div>
  )
}
