import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Connect apollo to the pokeapi endpoint
const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

// //Connect apollo to the pokeapi endpoint
/* const client = new ApolloClient({
    uri: "http://it2810-40.idi.ntnu.no:4000/",
    cache: new InMemoryCache(),
}); */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
