// github api

// fetch -- network based request

fetch(`https://api.github.com/users/dev-adityasinha`)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    const data = responseData.login;
    console.log(data);
  })
  .catch((error) => {
    console.log(`kuch toh wrong ho gaya ji`);
  });

