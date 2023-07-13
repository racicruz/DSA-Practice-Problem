Instructions
------------------------------------------------------------------------------------
A word index is like a book's index, but instead of page numbers, it associates words with their occurrences in the text. It helps quickly locate specific words and their positions, aiding tasks such as information retrieval and search algorithms.

Given a body of text broken up into specific lines, can you create an index for the text?

Existing Files
------------------------------------------------------------------------------------
src/index.js	Write your solution to the index problem in this file.
src/findOccurrences.js	Write your solutions to the findOccurrences task in this file.


The following data structures are used in this challenge.
------------------------------------------------------------------------------------
The body of the text is given as an array of strings where each string represents a single line of text. 
- You may use the index of the string in the array as the line number. 
The file src/data.js contains an example of one such body of text.
```
const data = [
  "He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.",
  "He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.",
  "He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.",
  "He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.",
  "He has affected to render the Military independent of and superior to the Civil power.",
  ...
  ]
```
As you can see from this snippet the word "justice" appears on line 0 and the word "he" appears in all of them.

An index generated from this text may look like this:
```
{
        right: [ 4, 5, 6, 12, 45, 47 ],
        alter: [ 4, 7 ],
        or: [ 4, 35 ],
        abolish: [ 4 ],
        institute: [ 4 ],
        new: [ 4, 6, 16, 19 ],
        laying: [ 4 ],
        its: [ 4, 29 ],
        foundation: [ 4 ],
        on: [
          4, 14, 18, 24,
          26, 35, 36, 48
        ],
   ...
}
```
index()
------------------------------------------------------------------------------------
Write a function named index that accepts an array of strings representing a body of text and returns an index of that text. Note the following:

do not include duplicate line numbers for words appearing more than once on a single line.
the index should be case insensitive. That is, the words "Everyone" and "everyone" should be counted as the same word.
hyphenated words are considered a single word. For example "non-self-governing" is a single word.
the index does not have to be sorted.
You may find that you need to break up a long piece of text into individual words. Using the .split() method of the String object is useful for this purpose. The .split() method accepts a regular expression that makes it possible to describe complex rules for word endings. Here is one such expression that you may use:
```
/[\s.,';]/
```
For example, the following snippet of code:
```
"For depriving us in many cases, of the benefits of Trial by Jury.".split(/[\s.,';]/)
```
splits the given text into individual words by spaces, full stops, commas, single quotes and semi-colons. The result is an array:
```
[
  'For',  'depriving',
  'us',   'in',       
  'many', 'cases',    
  '',     'of',       
  'the',  'benefits', 
  'of',   'Trial',    
  'by',   'Jury',     
  ''
]
```
- Notice that there are some empty strings in that result. Those are not valid words and should not appear in the final output.

*Write the solution to this problem in the file named src/index.js.

findOccurrences()
------------------------------------------------------------------------------------
Write a function named findOccurrences() that accepts:

words: a linked list of words
index: an index of a body of text formatted as described above
data: the original body of text from which the index was generated
- Generate an array of strings representing the lines of text in which any of the words in the list appears.

For example, given the following index:
```
{
    human: [ 1 ],
    object [ 6, 8 ],
    history: [ 8 ],
}
```
and the words "human", "object" and "history" and text given in the src/data.js file, construct the resulting array as follows:

The word "human" occurs on line 1, the word "object" occurs on line 6, and both words "object" and "history" appear on line 8 so return the lines 1, 6, and 8. The result will be:
```
[
  "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Natures God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.",
  "But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.",
  "The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States."
]
```