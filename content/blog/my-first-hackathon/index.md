---
foldername: my-first-hackathon
date: 2020-08-24T11:17:35.632Z
title: My First Hackathon
---
Yesterday I participated in my first hackathon, pretty late if I am being honest, but as they say better late than never. After 36 hours of coding I am glad that I decided to participate and I take back some very valuable experiences out of this weekend.

Our team of four people decided to build a food sharing web app, the basic idea was that the app allowed one to share any leftover food that they might have with people in need. It wasn't supposed to be a very complex implementation and we were up to paces within a couple of hours. We divided ourselves into two groups handling the front and the backend, I was on the group handling the NodeJS, Express and MongoDB based backend for the application.

For most of the development time, the things went quite smoothly. However, 2 or so hours before the final submission we hit a roadblock. The requests to a certain endpoint made from the frontend were not reaching the backend. We tried debugging the issue as best as we could but given the time left we were forced to submit without a complete implementation. As I went through the codebase after the dust settled, I realised that the request header containing the JWT was incorrectly named. Further, the request body had an incorrect data type for a particular field.

All of this commotion happened because of two reasons. Firstly, the person who was working on the backend with me implemented the 'food' related endpoints in a different code style and it lead to some confusion regarding the overall usability of that endpoint. Secondly, the requests that were being made to that endpoint were not having the correct data to begin with. I realised that when people are working alone it's simple enough to code. You just have to put your head down and write code, at the end your code might look ugly and not follow the best practices but it will probably work. However, when you are working as a team it is quintessential that the coding style is decided beforehand. It is extremely important that everyone is on the same page and understand what they are supposed to do.

Nevertheless, it was an awesome weekend and I loved coding it away. Although we were not able to submit a fully functioning app but we tried hard. l will definitely make some amends and fix the app in the coming days, don't think it will be that hard. ;)

### Resources

Here is the link to the Github repo and our Devpost submission.

- [Source Code](https://github.com/flozender/FoodShare)

- [Devpost Submission](https://devpost.com/software/foodshare-w8eytc)