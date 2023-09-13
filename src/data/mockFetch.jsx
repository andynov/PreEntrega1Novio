let instrumentos = []

export const getFetch = async () =>{
    try {
      const url = "./src/data/data.json"
      const instrumentosJson = await fetch(url)
      const data = await instrumentosJson.json()
      instrumentos.push(...data)
      return instrumentos
    }
    catch(error) {
      console.log('error')
    }
}

export const mFetch = (iid) => new Promise ((res, rej) => {
    setTimeout(() => {
            res(iid ? instrumentos.find(instrumento => instrumento.id === iid) : instrumentos)
        }, 1000);
})