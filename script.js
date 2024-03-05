const getData = async () => {
  try {
    // const response = await fetch(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/us`);
    const response = await fetch(`https://de1.api.radio-browser.info/json/stations/bystate/colorado`);
    const data = await response.json();
    document.querySelector('audio').setAttribute('src', data[1].url)
    console.log(data);
  } catch(err) {
    console.log('err', err);
  }
}

getData();