const apiKey = process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS;

export const Translator = {
	translate(from: string, target: string, text: string) {
		return fetch(
			`https://translation.googleapis.com/language/translate/v2?key=${apiKey}&from=${from}&target=${target}&q=${text}`,
			{
				method: 'POST',
				body: JSON.stringify({ text: text })
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				return jsonResponse.data.translations[0].translatedText;
			})
			.catch((error) => console.log('Failed to translate', error));
	},
	getLanguages() {
		return fetch('https://api.cognitive.microsofttranslator.com/languages?api-version=3.0')
			.then((response) => response.json())
			.then((jsonResponse) => {
				return jsonResponse.translation;
				
			});
	}
};
