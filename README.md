# My ninja name

A coding challenge made by Simon Côté, hosted on Heroku here : https://my-ninja-name.herokuapp.com/

Enjoy using it as much as I enjoyed making it!

## Usage

- The backend requires Visual Studio 2019 Community to be executed. Simply open the `.sln` solution file and click `IIS Express` at the top of the IDE to build and launch both the Web API and the Angular frontend.

- To run the .NET unit tests, simply right-click the `NinjAPI.Tests` project and select `Run Tests`.

- The frontend can also be individually launched using the following commands :

  - `npm install`
  - `npm run start`

- Unit tests are executed using this command :

  - `npm run test`

## Specifications & Technologies

### Backend

- The Web API was built using .NET Core 3.1 in C#
- The database is made of three simple JSON files (the awesome list, 10 ninja adjectives and 10 ninja names)
- The endpoint is exposed at `ninjify`, with `x` as the search term query parameter
- Unit tests were made using XUnit and Moq

### Frontend

- Made with Angular 9 in TypeScript, powered by Node.js
- Styling was made using SASS (was new to it)
- Unit tests were made using Jasmine and Karma
- Try the konami code !

## The Algorithm

This is a very simple deterministic algorithm that generates a ninja name based on a list of buzzwords sent by the user.

- The ninja name contains as many words as the amount of words the user inputs.
- The last word of the buzzword list is the name; all the other words are adjectives.

For each word in the buzzword list, the algorithm does the following :

1. Adds up the ASCII numeric value of each of the buzzword's characters.
2. Apply a modulo operation to the sum with the amount of words in the provided list.
3. Uses the result of the modulo as an index to select a word from the list or names/adjectives.

Finally, the selected words are put together and a final name is made and sent back to the user.

### Example

Buzzwords : Java, Ruby & Python

1. The ASCII numeric value of

- "java" is 106(j) 97(a) 118(v) 97(a) = 418
- "ruby" is 114(r) 117(u) 98(b) 121(y) = 450
- "python" is 112(p) 121(y) 116(t) 104(h) 111(o) 110(n) = 674

2. As there are currently 10 adjectives and 10 names in the JSON database files, we apply a modulo operation to the sums with 10 :

- 418 % 10 = 8
- 450 % 10 = 0
- 674 % 10 = 4

3. We use the result of the modulo operation to select two adjectives and one name from the lists :

- The ninth (8 + 1) adjective of the list is Swift
- The first (0 + 1) adjective of the list is Silent
- The fifth (4 + 1) name of the list is Kennen

These are then combined and make the final name "Swift Silent Kennen" !
