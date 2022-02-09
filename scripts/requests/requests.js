const dataUrl = 'scripts/requests/data.json'

const getData = async () => {
  const response = await fetch(dataUrl);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable fetch personal info!");
  }
};

