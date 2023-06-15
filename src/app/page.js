import Player from "./player";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 min-h-screen items-center p-24 select-none">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Aplausos</h3>
        <Player source="/sounds/claps.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Crónica</h3>
        <Player source="/sounds/cronica.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Datazo</h3>
        <Player source="/sounds/datazo.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Grillo</h3>
        <Player source="/sounds/grillo.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Meme créditos finales</h3>
        <Player source="/sounds/meme-de-creditos-finales.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Ponele voluntad</h3>
        <Player source="/sounds/ponele-voluntad.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Sexy saxofon</h3>
        <Player source="/sounds/sexy-saxofon.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Violín triste</h3>
        <Player source="/sounds/violin-triste.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Y se marchó</h3>
        <Player source="/sounds/y-se-marcho.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Ahí estáaaaaa goool (Closs)</h3>
        <Player source="/sounds/mariano-closs-ahi-esta-gol.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Ahí estáaaaaa goool (Closs)</h3>
        <Player source="/sounds/mariano-closs-ahi-esta-gol.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Mision Imposible</h3>
        <Player source="/sounds/mision-imposible.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Misterio</h3>
        <Player source="/sounds/misterio.mp3" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Titanic</h3>
        <Player source="/sounds/titanic.mp3" />
      </div>
    </main>
  );
}
