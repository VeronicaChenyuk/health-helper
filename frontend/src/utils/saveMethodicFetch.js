export default (methodic) => {
  fetch('https://health-medical-helper.herokuapp.com/savemethodic/update', {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      methodic,
    }),
  });
};
