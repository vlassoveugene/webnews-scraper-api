const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios');


var articles = []










//
axios.get('https://www.google.com/search?q=a&rlz=1C1CHBF_enUS911US911&biw=1920&bih=961&tbs=qdr%3Ah%2Csbd%3A1&tbm=nws&ei=j70jY5j3O6GtqtsPhZyZyA0&ved=0ahUKEwjY-vjZgZj6AhWhlmoFHQVOBtkQ4dUDCA0&uact=5&oq=a&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQAzIFCAAQkQIyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIICAAQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwFQAFgAYMkHaABwAHgAgAG7AYgBuwGSAQMwLjGYAQCgAQHAAQE&sclient=gws-wiz-news')
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
$('a:contains("a")', html).each(function () {
    const title = $(this).text()
    const url = $(this).attr('href')
    articles.push({
    title,
    url: 'https://www.google.com' + url,
    })
    })
})
//

router.get('/', (req, res) => {
res.json(articles)
});

router.get('/json', (req, res) => {
    res.json({
        'path': 'json',
        'author': 'Eugene Vlassov',
    });
});


app.use('/', router);

module.exports.handler = serverless(app);