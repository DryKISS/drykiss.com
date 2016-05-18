# Todo list

Adds tasks based on the anatomy of the website, in terms of atomic elements.

--------------------------------------------------------------------------------

## Global

- [ ] Sign up to Feed burner for the blog elements
- [ ] Create Facebook social page
- [ ] Create Google plus business page
- [ ] Create twitter
- [ ] Translation / Config page to write over YAML files
- [ ] Check responsive across all elements
- [ ] Optimise the images on the site
- [ ] Create the GitHub 404 file @see - https://help.github.com/articles/creating-a-custom-404-page-for-your-github-pages-site/
- [ ] Look at the background colour of the website - white not great
- [ ] Look at using pageHeader for the header of the pages
- [ ] Should rename the folder in source to atomic design style - page, molecule etc

--------------------------------------------------------------------------------

## Meta

- [ ] Can remove the keywords meta tag from the sites
- [ ] Make sure the favicon works and across paths
- [ ] Add in the dublin core
- [ ] Add in the facebook
- [ ] Add in the apple
- [ ] Add in the google
- [ ] Check the facebook data for app id etc and make sure correct

--------------------------------------------------------------------------------

## Google

- Analytics
    - [ ] Check that this is setup correctly
        - UA-49976138-1
- Search console
    - [ ] Make sure the verification is done for google search console
        - KV07s1r94b_CG89V9Tuh7a5FYEv4kG8-WbLMGLCOIjw
- [ ] Create goals for contact and reading case studies etc

--------------------------------------------------------------------------------

## Ideas

- [ ] Create a Quote form / Site Analysis in Markdown / HAML for easy send to clients.
- [ ] Describe how micro sites can be built really fast
- [ ] Create a package for a new start up

--------------------------------------------------------------------------------

## CSS

- [ ] Need to sort out the Variables file
- [ ] Push the CSS into the page and component sections

--------------------------------------------------------------------------------

## Navigation bar

- [ ] Add DryKISS to the navigation bar
- [ ] Address the accessibility of the navigation bar
- [ ] Make sure the micro-formats are on the navigation bar
- [ ] Add phone number or some contact detail to the bar

--------------------------------------------------------------------------------

## Footer

- [ ] Look for better icons for each - put into circle icons
- [ ] Link in LinkedIn Page
- [ ] Link to Google Plus page
- [ ] Want a margin bottom after the footer so there is space - currently have BR on the contact section - remove these

--------------------------------------------------------------------------------

## Home

- [ ] Add in user-voice or something so someone can chat directly to me
- [ ] Need to put the text into the locale file

- [ ] Jumbotron
    - [ ] Fade the text in as before

- [ ] Ethos
    - [ ] Make the char count similar so they end on same line across the sections
    - [ ] More emphasis on the columns of text - better typography
    - [ ] Link the text to relevant resources and internal links
    - [ ] Use of imagery / icon to identify to the three core principals

- [ ] Service
    - [ ] Want to highlight a recent case study here - use the GreenTouch one I need to do.

- [ ] Recent projects
    - [ ] Add this module back onto the home page
    - [ ] Sort out where popover should go - top does not work great
        - [ ] Perhaps add an overlay to the placeholder instead
    - [ ] Add in a transparent bottom area with a button to view more information
        - [ ] Add tags / date
    - [ ] Make sure it picks up published posts only

--------------------------------------------------------------------------------

## What we do

- [ ] Create the hover effect for the screenshots
- [ ] Add the caption to the Screenshot area
- [ ] Create three modules for what we do similar to http://clearleft.com/does
    - Panels or Thumbnails?
    - [ ] Front-end development
    - [ ] Static blog generation
    - [ ] Product consultancy & innovation
    - [ ] Digital strategy & planning
    - [ ] MVP development
- [ ] Create a link to a case study from each section
- [ ] Complete the copy on this page
- [ ] Link to google SEO for responsive site section
- [ ] Add some padding to the cards - colour the headings

--------------------------------------------------------------------------------

## Who we are

- [ ] Sort out the layout of the page
- [ ] Complete the copy on this page

--------------------------------------------------------------------------------

## Our work

Uses the MixItUp library to present the portfolio blog posts in a filterable
manner.

- Examples
    - https://www.digiti.be/projects

- General
    - [ ] Stop the flicker of the screen as the screenshots animate in
    - [ ] Sort out what portfolio elements we want to show on this page - choose 4 to start
    - [ ] Use paging on this page to scroll through more than 16

- Heading
    - [ ] Does the block quote work here - try pageHeader instead
    - [ ] Human - change copy here to be more human

- Filter
    - Based on the category of each portfolio blog entry
    - [ ] Define the categories needed for the portfolio
    - [ ] Add a title to the filter bar - Filter : or something
    - [ ] Apply numbers that show total in each section

- Image layout
    - 4 columns of uniform responsive images and captions
        - Image thumbnail 360 x 360
    - [ ] Look at making the site images pop a little more - maybe put at angle not square on.
    - [ ] Test how the layout looks with many elements

- Caption
    - [ ] Centre the text and add a small description for each element
    - [ ] Design the caption to flow below the box a little better

--------------------------------------------------------------------------------

## Blog details

Create the template to render the blog post, all the content should come from
the blog post entries. Including images and formatting of these.

- Examples
    - http://www.keenthemes.com/preview/metronic/theme/admin_1/page_general_portfolio_1.html
    - http://fentonbutcher.co.uk/work/anz/
    - http://clearleft.com/made/channel-4-scrapbook

- General
    - [ ] Layout the details in a better way
    - [ ] Get a proper disqus comments shortcode for this site
    - [ ] Add breadcrumbs to the top linking back to projects

- Accessibility
    - [ ] Need to make sure all Alt tags are correct
    - [ ] Role are applied to the template

- Micro Format
    - [ ] Sort out the object type for a portfolio blog post - contains company and assets
    - [ ] Need to move the article section to the top of the code

- Heading
    - [ ] Include the brand logo potentially - can be part of the screenshots
    - [ ] PageHeader or blockquote try this out
    - [ ] Human - change copy here to be more human
    - [ ] Create the strapline for what was done - reuse the caption perhaps

- Blog image
    - [ ] 4 columns with screenshots inside
    - [ ] Put the images in an array through the thumbnail partial
    - [ ] Middle one reserve for logo perhaps
    - [ ] Need to remove the caption from these
    - [ ] Allow the images to be clicked and zoomed on to see full image in full length

- Content
    - [ ] Split this into two columns with What we did on left and description on right
    - [ ] Look at the pull quotes on clearLeft
    - [ ] Provide tags potentially on what was done - i.e. UX, Database, Development, SEO

- What we did section
    - [ ] Highlights section
        - [ ] Key deliverables and KPIs / achievements completed
    - [ ] List out a short paragraph on what was done
    - [ ] Roles and responsibilities of the project perhaps - who was on team
        - [ ] Link to the team members
    - [ ] Project duration
    - [ ] Link to live site if applicable

- Disqus comments
    - [ ] Position these a bit better not full width
    - [ ] Margin at bottom
    - [ ] Move to the right column

- Pagination
    - [ ] Remove for now
    - [ ] Sort out the older and newer pagination links, need to link to the correct posts

--------------------------------------------------------------------------------

## Newsletter

- [ ] Add a join newsletter module onto the home page underneath the jumbotron
- [ ] Create a template for sending a newsletter out - design and copy

--------------------------------------------------------------------------------

## Contact

- [] Contact Details
    - [ ] Phone, Email, info@, Twitter, Facebook, Address
- [ ] Google Map
    - [ ] Form
    - [ ] Name, Email, Message, Captcha
- [ ] Financial Info
- [ ] Look at WuFoo

--------------------------------------------------------------------------------

## Our blog

- [ ] Create the blog

--------------------------------------------------------------------------------
