const content =
`<p>I was always curious about coding. My background was business and event planning; nothing to do with coding at all. In the summer of 2019, I joined a 9-week Bootcamp to learn the basics of becoming a developer. A decision that resulted in a lack of sleep, my computer being permanently on 24/7 (switched from text editor to browser to text editor and back again), and my fingers hoovering constantly over Control+Shift+C at every page like a coffee addict waiting to grab that next shot. For our final project, I spent 3 weeks eating, breathing and sleeping code. But I loved it!	</p>
<p>Recently, someone asked me, “How do browsers work?”, a question so basic and simple that I never put much thought into, though it reminded me of a question I once asked one of my teachers - Why she wanted to learn to code? Her answer was because she wanted to understand what goes on behind the scene when you click on “Google search” or “I’m feeling lucky” in a search engine. No one questions these basic functionalities because we use it so often, it just becomes part of the everyday things we do. And no one taught it in (my) class, because it was just given!</p>
<p>So as a challenge to myself, I went about relearning it all to break it down into something my mother can understand.</p>
<p>(Please note that we are talking about basic concepts from the view of a newbie developer and of course, a million pages can be written about browsers technology.)</p>
<p>Let’s imagine, the browser is an agent that takes your “order”, who then finds the right package to return to you, presenting it in a certain way to show you the best “content” all within less time than it takes to make a coffee. </p>
<p><strong>To understand the browser and how it works, let’s take a look at the higher level of structure of a browser. There are 7 main components to consider:	</strong></p>
<p>1. The User Interface - These are the main interfaces you may have came across: Chrome, Internet Explorer, Firefox, Safari and Opera.</p>
<p>2. The Rendering Engine - it interprets the HTML, XML documents and images into a user friendly display. For example, Chrome was initially using WebKit, but in the year 2013 they eventually forked it and created Blink engine. Except iOS, all Chrome’s variants are using Blink. As of September 2019, Chrome owns 69.08% of the global market share of rendering engine.</p>
<p>3. The Browser Engine - it’s a bridge between rendering engine and user interface, it commands the rendering engine.</p>
<p>4. Networking - it retrieves the URLs using HTTP or FTP, it also handles all the communication and security of the Internet.</p>
<p>5. JavaScript Interpreter - it interprets JavaScript code to the rendering engine for display.</p>
<p>6. UI Backend - it helps to draw all the widgets you have seen on a screen such as checkboxes, input box, sliders etc.</p>
<p>7. Data Persistence/Storage - it’s a small database created locally that manages cookies, cache, bookmarks, and preferences.</p>
<p>This is a simple picture of what the elements behind the screen are, showing us the browsers’ roles and how each component connects and communicates with each other to render the web page for users viewing.</p>
<p>However, behind each component, it is much more detailed in the way it works to show us what we see as a final webpage. For example, the rendering engine - it is parsing HTML to construct the DOM tree, then rendering the tree construction, giving the layout of the rendering of the previous step. Finally it “paints” the website we are seeing instead of showing us a bunch of code that doesn’t make sense to a human. In other words, it translates machine language into human language. 	</p>
<p><strong>Why is all this information important for a developer?</strong></p>
<p>1. It helps a developer choose the right supported version of the browser.
Though these days, it seems to be a minor problem since most of the popular browsers are compatible with each other. But it is always nice to have your code fits in with most of the popular browsers or devices.
</p>
<p>2. To have a better sense of loading time (of the webpage).
We have little patience in modern society and we definitely don’t have 5 minutes to wait for a marvelous page to load. Understanding the internals of the browser operations helps us make better decisions about what code to use such as when JavaScript is running, the browser interprets the code of JavaScript and sends the results to the rendering engine. But if the script is external, then the parsing needs to wait until the script is executed, slowing down a page load. This leads to a trend of plainly designed websites for faster loading time.
</p>
<p>3. It helps to understand how to protect your web application’s security.
I heard a story while I was in the Bootcamp about an ex-alumni who had a startup. When developing their web application he pushed his code without hiding an API key, and voilà! He got robbed. And just like that, you could lose your money because of the vulnerabilities of HTTP or malicious users.
</p>
<p>4. Last but not least, it might be helpful for you in a technical interview!</p>
<p>For someone like me without a technical background, I found it fascinating and eye-opening to learn something new that is simple, but complex. Understanding the browser helps make better decisions about website development (codes to use, testing, programming style, guidelines etc) and brings in development best practices and principles. Something every newly born developer should stop and understand before running full speed into the big wide world of development. </p>
<br>
<br>
<br>
<p>Resources:
<br>
https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_rendering_engine https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509 https://odino.org/wasec-understanding-the-browser/ https://www.statista.com/statistics/544400/market-share-of-internet-browsers-desktop/</p>

`

export default content
