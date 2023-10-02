const fetchNASAData = async () => {
    try {
        url="https://api.nasa.gov/planetary/apod?api_key=PXWNV10TJF0v90Dc4nga3bspWvcXkXffZ045dVp4"
      const response = await fetch(`${url}`)
      const data = await response.json()
      document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('astropic').src = data.hdurl
  document.getElementById('about').textContent = data.explanation
    } catch (error) {
      console.log(error)
    }
  }
  
  fetchNASAData()
  