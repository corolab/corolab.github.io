# \_members/

This folder contains one file per member, with the following format:
```
---
type: member
name: Jane Doe
picture: JaneDoe.jpg
website: https://www.google.com
---
```
Where:
- `type`: Please leave its value `member` fixed.
- `name`: Name of person.
- `picture` [optional]: A file name with extension. The path [/img/members/](/img/members/) is already prepended during automatic file parsing, so please omit it.
- `website` [optional]: A website URL.
