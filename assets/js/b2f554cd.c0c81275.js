"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"flair-0.12","metadata":{"permalink":"/blog/flair-0.12","editUrl":"https://github.com/flairNLP/flairnlp.github.io/edit/main/blog/2023-03-15-first-post.md","source":"@site/blog/2023-03-15-first-post.md","title":"Announcing Flair 0.12","description":"Flair version 0.12 is finally released, with tons of new features, enhancements and bug fixes. With this post, we give an overview of some cool new features.","date":"2023-03-15T00:00:00.000Z","formattedDate":"March 15, 2023","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"flair","permalink":"/blog/tags/flair"}],"readingTime":3.425,"hasTruncateMarker":true,"authors":[{"name":"Alan Akbik","title":"Creator of Flair","url":"https://github.com/alanakbik","imageURL":"https://github.com/alanakbik.png","key":"alan"}],"frontMatter":{"slug":"flair-0.12","title":"Announcing Flair 0.12","authors":"alan","tags":["release","flair"]}},"content":"Flair version 0.12 is finally released, with tons of new features, enhancements and bug fixes. With this post, we give an overview of some cool new features.\\n\\n\x3c!--truncate--\x3e\\n\\n## New Feature: Simplified Tagging\\n\\nWe now offer a unified way of loading all Flair models and accessing all Flair predictions. That means that users no longer need to know the underlying model class to get Flair predictions.\\n\\nWe illustrate the new simplicity with two examples: one for predicting named entities, and one for predicting sentiment. You\'ll see the code is now **basically identical** for both:\\n\\n**Example 1: Tagging Named Entities**\\n\\nLet\'s run **named entity recognition** (NER) over an example sentence. All you need to do is make a `Sentence`, load a pre-trained model and use it to predict tags for the sentence:\\n\\n```python\\nfrom flair.data import Sentence\\nfrom flair.nn import Classifier\\n\\n# make a sentence\\nsentence = Sentence(\'I love Berlin .\')\\n\\n# load the NER tagger\\ntagger = Classifier.load(\'ner\')\\n\\n# run NER over sentence\\ntagger.predict(sentence)\\n\\n# print the sentence with all annotations\\nprint(sentence)\\n```\\n\\nThis should print:\\n\\n```coffeescript\\nSentence: \\"I love Berlin .\\" \u2192 [\\"Berlin\\"/LOC]\\n```\\n\\nThis means that \\"Berlin\\" was tagged as a **location entity** in this sentence.\\n\\n**Example 2: Tagging Sentiment**\\n\\nLet\'s run **sentiment analysis** over the same example sentence to determine whether it is POSITIVE or NEGATIVE. Same code as above, just a different model:\\n\\n```python\\nfrom flair.data import Sentence\\nfrom flair.nn import Classifier\\n\\n# make a sentence\\nsentence = Sentence(\'I love Berlin .\')\\n\\n# load the sentiment tagger\\ntagger = Classifier.load(\'sentiment\')\\n\\n# run sentiment analysis over sentence\\ntagger.predict(sentence)\\n\\n# print the sentence with all annotations\\nprint(sentence)\\n```\\n\\nThis should print:\\n\\n```console\\nSentence[4]: \\"I love Berlin .\\" \u2192 POSITIVE (0.9983)\\n```\\n\\nThis means that the sentence \\"I love Berlin\\" was tagged as having **POSITIVE** sentiment.\\n\\n**As you can see, the two examples are basically the same code.** The only difference is the model you loaded (\\"ner\\" vs \\"sentiment\\")!\\n\\n## New Tagger: Entity Linking\\n\\nAs of Flair 0.12 we ship an **experimental entity linker** trained on the [Zelda dataset](https://github.com/flairNLP/zelda). The linker not only tags entities, but also attempts to link each entity to the corresponding Wikipedia URL if one exists.\\n\\nTo illustrate, let\'s use the example sentence \\"Kirk and Spock met on the Enterprise.\\" The code is the same as above, just load the **linker** model:\\n\\n```python\\nfrom flair.nn import Classifier\\nfrom flair.data import Sentence\\n\\n# load the model\\ntagger = Classifier.load(\'linker\')\\n\\n# make a sentence\\nsentence = Sentence(\'Kirk and Spock met on the Enterprise.\')\\n\\n# predict entity links\\ntagger.predict(sentence)\\n\\n# iterate over predicted entities and print\\nfor label in sentence.get_labels():\\n    print(label)\\n```\\n\\nThis should print:\\n\\n```coffeescript\\nSpan[0:1]: \\"Kirk\\" \u2192 James_T._Kirk (0.9969)\\nSpan[2:3]: \\"Spock\\" \u2192 Spock (0.9971)\\nSpan[6:7]: \\"Enterprise\\" \u2192 USS_Enterprise_(NCC-1701-D) (0.975)\\n```\\n\\nAs we can see, the linker can resolve that:\\n\\n* \\"Kirk\\" refers to the entity \\"[James\\\\_T.\\\\_Kirk](https://en.wikipedia.org/wiki/James_T._Kirk)\\"\\n    \\n* \\"Spock\\" refers to \\"[Spock](https://en.wikipedia.org/wiki/Spock)\\" *(ok, that one was easy)*\\n    \\n* \\"Enterprise\\" refers to the \\"[USS\\\\_Enterprise\\\\_(NCC-1701-D)](https://en.wikipedia.org/wiki/USS_Enterprise_(NCC-1701-D))\\"\\n    \\n\\nNot bad, eh? However, that last prediction is not quite correct as fans of Star Trek will know. Entity linking is a hard task and we are working to improve the accuracy of our model.\\n\\n## New Language: Support for Ukrainian\\n\\nThis version adds support for Ukrainian taggers, embeddings and datasets. For instance, to do named entity tagging of a Ukrainian sentence, do:\\n\\n```python\\nfrom flair.nn import Classifier\\nfrom flair.data import Sentence\\n\\n# load the Ukrainian NER model\\ntagger = Classifier.load(\'ner-ukrainian\')\\n\\n# make a sentence\\nsentence = Sentence(\'\u042f \u043b\u044e\u0431\u043b\u044e \u0411\u0435\u0440\u043b\u0456\u043d.\')\\n\\n# predict entity links\\ntagger.predict(sentence)\\n\\n# print sentence with predictions\\nprint(sentence)\\n```\\n\\nThis should print:\\n\\n```coffeescript\\nSentence[4]: \\"\u042f \u043b\u044e\u0431\u043b\u044e \u0411\u0435\u0440\u043b\u0456\u043d.\\" \u2192 [\\"\u0411\u0435\u0440\u043b\u0456\u043d\\"/LOC]\\n```\\n\\nThis means that \\"\u0411\u0435\u0440\u043b\u0456\u043d\\" was tagged as a **location entity** in this sentence.\\n\\n## Other New Features\\n\\nThere are a host of new features in this release, but discussing them all would be too much for this post. Important new features include:\\n\\n* Support for multitask learning in Flair\\n    \\n* Major internal refactorings for easier code maintenance\\n    \\n* Updated tutorials and better documentation\\n    \\n* Improved accuracy in our FLERT models\\n    \\n\\nWe will look at these and other features in separate posts in more detail! **Stay tuned!**"}]}')}}]);