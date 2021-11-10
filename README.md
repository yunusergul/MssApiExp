# # Welcome to MSS App

# Frontend

    npm i react-bootstrap@0.32.4
    npm install --save redux react-redux

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/56773451/141110418-c7dd1c3b-ed56-4d7f-bfa6-c12c1a5813a9.gif)


# Backend

Now let's install the following dependencies:

		npm install express node-cache axios
We enter the api_key in the **server.js** file.

	    const  api_key='********'
![Ekran Görüntüsü (6)](https://user-images.githubusercontent.com/56773451/141110860-3bf81956-1c66-4212-85b1-8984d3f901c7.png)

We use the following code in the directory where the server.js file is located.


	    Node  server.js

![ssssss](https://user-images.githubusercontent.com/56773451/141111019-d716e050-1a9f-4487-bfa0-3459cc3534c0.png)

	> After running the server, you can connect to the API with http://localhost:80.
## Caching
![caching (1)](https://user-images.githubusercontent.com/56773451/141111078-fd111c98-22bc-4568-9015-b9dbe38c691a.png)

## API Usage

|                |GET Parameters                 |Result                       |
|----------------|-------------------------------|-----------------------------|
|Movie search|`/api/search?keyword=Ali`            |Brings movies with Ali in the title            |
|Clear cache          |`/api/clear`            |Cache is cleared            |
