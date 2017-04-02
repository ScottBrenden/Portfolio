'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('*', function(request, response){
  response.sendFile('/index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log(`on PORT localhost:${PORT}`);
});
