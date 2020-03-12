export default (methodic) => {
  fetch('http://localhost:5000/savemethodic/update', {
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
