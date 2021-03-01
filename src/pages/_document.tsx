import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{    
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          <meta name="author" content="Thiago Cabral" /> 
          <meta name="keywords" content="Pomodoro, pomodoro, programação" /> 
          <meta name="description" content="Pomodoro.dev" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}