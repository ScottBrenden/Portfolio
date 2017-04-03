// 'use strict';

$.ajax({
  url: 'https://api.github.com/user/repos?type=owner',
  method: 'GET',
  headers: {
    Authorization: `token ${githubToken}`
  }
}).then(
  console.log(data[0].name);
  data => data.map(repo => $('#projects').append(`<p>${repo.name}</p>`)), err => console.log(err)
);
