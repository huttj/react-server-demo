const express        = require('express'),
      React          = require('react'),
      ReactDOMServer = require('react-dom/server');

const app = express();

const Index = require('../shared/index.jsx');
const List  = require('../shared/list.jsx');

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
  const items = [
    {
      text: 'Buy milk',
      completed: true
    },
    {
      text: 'Write killer app',
      completed: false
    },
    {
      text: 'Get paid',
      completed: false
    }
  ];
  const listHtml = ReactDOMServer.renderToString(<List items={items}/>);
  const pageHtml = `
    <html>
      <head>
        <title>Hello World</title>
        <style>
          .item:hover {
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div id="container">${listHtml}</div>
        <script>var items = ${JSON.stringify(items)};</script>
        <script src="public/bundle.js"></script>
      </body>
    </html>
  `;
  res.send(pageHtml);
});

// Alternate Method: Render the whole page with React
//
// app.get('/', (req, res) => {
//   const items = [
//     {
//       text: 'Buy milk',
//       completed: true
//     },
//     {
//       text: 'Write killer app',
//       completed: false
//     },
//     {
//       text: 'Get paid',
//       completed: false
//     }
//   ];
//   const page = ReactDOMServer.renderToString(<Index items={items}/>);
//   res.send(page);
// });

app.listen(8080, () => console.log('Listening on 8080'));