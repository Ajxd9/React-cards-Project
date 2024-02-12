const normalizeFromServer = (dataFromServer) => {
  if (!dataFromServer || typeof dataFromServer !== 'object') {
    throw new Error('Invalid server response format for user login data.');
  }

  const name = dataFromServer.name || {};
  const image = dataFromServer.image || {};
  const address = dataFromServer.address || {};

  return {
    first: name.first || '',
    middle: name.middle || '',
    last: name.last || '',
    phone: dataFromServer.phone || '',
    url: image.url || '',
    alt: image.alt || '',
    state: address.state || '',
    country: address.country || '',
    city: address.city || '',
    street: address.street || '',
    houseNumber: address.houseNumber || '',
    zip: address.zip || '',
  };
};

export default normalizeFromServer;
