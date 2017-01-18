export default ({ body, title, scriptDest, data }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/css/react-css.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>` +
        (data !== undefined ?
           `<script type="text/javascript" charset="utf-8">
               window.data = ${JSON.stringify(data)};
            </script>`
            : ''
        ) +        
        `<script src="/${scriptDest}"></script>
      </body>
      
    </html>
  `;
};