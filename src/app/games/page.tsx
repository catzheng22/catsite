'use client'

import { useEffect } from 'react'

type GameProps = {
  id: string,
  title: string,
  buildPath: string,
}

function loadUnityInstance({id, title, buildPath}: GameProps) {
  const canvas = document.getElementById(id) as HTMLCanvasElement
  const config = {
    dataUrl: `${buildPath}/${title}.data`,
    frameworkUrl: `${buildPath}/${title}.framework.js`,
    codeUrl: `${buildPath}/${title}.wasm`,
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'CATZHENG',
    productName: '${title}',
    productVersion: 'Gold'
  }
  const script = document.createElement('script')
  script.src = `${buildPath}/${title}.loader.js`
  script.onload = () => {
    // @ts-ignore
    createUnityInstance(canvas, config)
  }
  document.body.appendChild(script)
}

const unityGames: GameProps[] = [
  {
    id: 'unityCanvas1',
    title: 'Soulime',
    buildPath: '/unity/Soulime/Build'
  },
  {
    id: 'unityCanvas2',
    title: 'Yuurei',
    buildPath: '/unity/Yuurei/Build'
  },
  {
    id: 'unityCanvas3',
    title: 'Zelda',
    buildPath: '/unity/Zelda/Build'
  }
]

export default function Games() {
  useEffect(() => {
    unityGames.forEach(game => {
      loadUnityInstance(game)
    })
  },[])

  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-4">Game Demos</h1>

      {unityGames.map(({id, title}) => (
        <div key={id}>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <canvas
            id={id}
            width={960}
            height={600}
            className="w-full max-w-5xl aspect-[16/10] rounded-lg border border-gray-300"
          />
        </div>
      ))}
    </div>
  )
}