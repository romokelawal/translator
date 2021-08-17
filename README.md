# Notice
I decided not to use Google Cloud Translation to generate the supported languages, because it requires Google Service Account Key to be uploaded to the local directory or repository and this can cause security risk for the Google acount where the service key was generated from or deployment complications.
Therefore, I used Microsoft Trnaslator to generate the languages but some languages generated are not supported by Google Cloud Translation. The unsupported languages are: 
Assamese
Fijian
French (Canada)
Inuktitut
Kurdish (Northern)
Hmong Daw
Queretaro Otomi
Dari
Portuguese (Portugal)
Serbian (Cyrilic)
Tigrinya
Klingon (Latin)
Klingon (plqaD)
Tongan
Tahitian
Yucatec Maya
Cantonese (Traditional)

# Requirements
Display a form with:
    Input text - Done
    Source language - Done
    Target language - Done
    Translate button - Done
Send the user input to a machine translation engine (Apertium or Google translate or Microsoft translator or Yandex translate) through appropriate API - Done
Display the result to user - Done
Store the previous search to local storage - Done
Display the previous search - Done

## Project Structure
Presentational and Container Components arrangement
Presentational components are concerned with how things look, do not specify how the data is loaded, and rarely have states etc. In this project, they are in the components folder in the src folder.
Container components are concerned with how things work, they provide the data and behaviour to presentational components. In this project, they are in the container folder in the src folder.

## Deployment Checklist

## Browser Test

Chrome, Safari, Firefox

## Device Test
Android(Mobile and Tablet), iOS(Mobile and Tablet)

## API Key
Translation API - Google Cloud Translation
Lanaguage API - Microsoft Translator


In the project directory, you can run:

### `npm install`

Installs all app dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
