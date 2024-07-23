async function sendHttpRequest(url, config, errorMessage) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      errorMessage ||
      resData.message ||
      'Something went wrong, failed to send request.'
    );
  }

  return resData;
}

export default sendHttpRequest;
