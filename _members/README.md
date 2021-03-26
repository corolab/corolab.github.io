# /\_members/

This folder contains subfolders for each of the members categories, postdocs, phds, visitors, etc.

Each subfolder contains one file per member, with the following format (once someone leaves the corolab it can be move to the [/\_members/_alumni/](/_members/_alumni/) folder for former members.):

```
---
type: member
name: Jane Doe
free-text: I work on project ___
picture: JaneDoe.jpg
website: https://www.google.com
---
```
Where:
- `type`: Please leave its value `member` fixed.
- `name`: Name of person.
- `free-text` [optional]: Some free text.
- `picture` : A file name with extension. The path [/img/members/](/img/members/) is already prepended during automatic file parsing, so please omit it. The default `picture` should be [/img/members/profile.png](/img/members/profile.png) if not image of the person is added.
- `website` [optional]: A website URL.
