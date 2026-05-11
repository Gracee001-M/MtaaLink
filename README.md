# MtaaLink
-A web app where community members can post announcements, job opportunities, events, and alerts.
It’s simple, useful, and easy to divide work.
## Core Features
Users can:
View announcements
Post an announcement (job/event/alert)
Search announcements
Filter by category (Jobs, Events, Alerts, General)
Comment or contact poster
Report fake posts
Admin can:
Approve posts before they appear
Delete spam posts
Ban users
### Pages Needed (Frontend)
Home page (latest posts)
Categories page
Post details page
Create post page
Login/Register page
User profile/dashboard
Admin dashboard
#### Team Division (10 People)
####  Frontend Team (5 Members)
Frontend 1: UI Designer + Layout(Joel Wachira)*
Navbar, footer, homepage layout
Responsive design

Frontend 2: Posts Display
Posts cards
Post details page
Comment section UI

Frontend 3: Create Post Form(Grace Macharia)*
Form validation
Upload image option
Category selector

Frontend 4: Authentication Pages
Login page
Register page
User profile UI

Frontend 5: Search + Filters
Search bar
Category filter dropdown
Sort by latest/oldest

#### Backend Team (5 Members)
Backend 1: Authentication System
Register/login API
JWT authentication
Password hashing

Backend 2: Posts API (CRUD) (Grace Macharia)* 
Create post
Edit post
Delete post
View posts

Backend 3: Database & Models
User model
Post model
Comment model
Report model

Backend 4: Admin System
Approve posts
Reject posts
Delete spam posts
Ban user logic

Backend 5: Search + Filters API
Search by title/content
Filter by category
Pagination (next/previous pages)

##### Database Tables / Collections
Users
name
email
password
role (user/admin)
Posts
title
category
description
image (optional)
contact info
status (pending/approved)
createdBy
Comments
postId
userId
message
date
Reports
postId
reporterId
reason
###### Team members 
Gracee001-M
wachira-54
maureenmuchoki-hub
chesemchanel
