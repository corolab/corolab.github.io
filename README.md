# CoRoLab UoM

Currently hosted at https://corolab.github.io

If you have any doubts or comments, please:
1. Check if you can find the answer through the individual file documentation, as well as the [Issues](https://github.com/corolab/corolab.github.io/issues) section.
2. If your doubt or comment is not a duplicate, please post a detailed [New issue](https://github.com/corolab/corolab.github.io/issues/new).

### Contents
* [How to serve on localhost](#how-to-serve-on-localhost)
* [How to upload changes to GitHub](#how-to-upload-changes-to-github)
* [How to modify the About section](#how-to-modify-the-about-section)
* [How to add/modify a Member](#how-to-addmodify-a-member)
* [How to add/modify a Robot](#how-to-addmodify-a-robot)
* [How to add/modify a Project](#how-to-addmodify-a-project)
* [How to add a new section](#how-to-add-a-new-section)
* [File and folder description](#file-and-folder-description)
   - [README.md](#readmemd)
   - [\_config.yml](#_configyml)
   - [\_members/](#_members)
   - [\_includes/](#_includes)
   - [img/](#img)

## How to serve on localhost
It is useful to serve on `localhost` to modify the website and see changes locally.

1. From the root of the project, run the following command (which is universal for all [jekyll](https://jekyllrb.com/)-based projects):
```bash
bundle exec jekyll serve
```

2. You can now browse the site at the default location: http://127.0.0.1:4000

## How to upload changes to GitHub
This project is managed as any project on [GitHub](https://www.github.com). You may use [Git](https://git-scm.com) or even the GitHub web interface, both on which you can find many tutorials online. The following points are specific to the [GitHub Pages](https://pages.github.com) mechanism used, and its [current settings](https://github.com/corolab/corolab.github.io/settings):

1. Please **do not upload** the `_site/` folder, nor the `Gemfile.lock` file. They are auto-generated locally, and the same should happen on the GitHub Pages servers.

2. It is safe to `git push` to any upstream branch, just remember that what is on `master` is what will be actually rendered as the website.

## How to modify the About section
This section is in fact in plain `.html`, the [\_includes/about.html](/_includes/about.html) file, which you can edit manually. If images are ever added, please create an `img/about/` folder.

## How to add/modify a Member
This section is slightly more complex. To keep everything tidy, please place all used images in the [img/members/](/img/members/) folder (**note**: images must currently be 720x720).

1. Some Javascript magic parses `PhD Students` from the [\_members/](_members) folder. Insert or modify `.markdown` files as described in the [members/README.md](/_members/README.md) file.

2. The rest of members may be edited manually in plain `.html`, the [projects.html](/_includes/projects.html).

## How to add/modify a Robot
This section is in fact in plain `.html`, the [\_includes/robots.html](/_includes/robots.html), which you can edit manually. To keep everything tidy, please place all used images in the [img/robots/](/img/robots/) folder (**note**: images must currently be 720x720).

## How to add/modify a Project
This section is in fact in plain `.html`, the [\_includes/projects.html](/_includes/projects.html), which you can edit manually. To keep everything tidy, please place all used images in the [img/projects/](/img/projects/) folder.

## How to add a new section
Here is how to add a new (static) section, as was done for [about](https://github.com/corolab/corolab.github.io/commit/c5ceb77), [robots](https://github.com/corolab/corolab.github.io/commit/efd6f68), or [projects](https://github.com/corolab/corolab.github.io/commit/30077f7):
- Add some template plain `.html` code at [_includes](/_includes).
- Include it from within [_layouts/default.html](_layouts/default.html).
- Add a bullet point with a link to it from within [_includes/header.html](_includes/header.html).
- In some cases, you may also create a folder inside the [img/](/img/) folder.
- In some cases, you may also add some `.css` code in [_includes/css/agency.css](_includes/css/agency.css).

## File description

### README.md
The first line of this file, which is the file you are reading, becomes the `.html` `<head>` `<title>` (what is seen on the browser's tab description).

### _config.yml
The [\_config.yml](/_config.yml) file is also very important. It contains:
- Metadata that is important for SEO
- Some basic color settings
- Links to your social media, where you can add new links for free and will be rendered nicely

### _includes/
The [\_includes](/_includes) folder mainly contains plain `.html` files which should be rather static, but can be modified freely.
- [about.html](/_includes/about.html): Edit this file manually to update the general research group "about" section.
- [members.html](/_includes/members.html): For `PhD Students`, use the mechanism stated for `_members/`, [above](#_members). For other cases, edit this file manually to update the general research group "about" section.
- [robots.html](/_includes/robots.html): Edit this file manually to update the general research group "robots" section.
- [projects.html](/_includes/projects.html): Edit this file manually to update the general research group "projects" section.
- [\_includes/css/agency.css](_includes/css/agency.css): A `.css` file to which fields are sometimes added for new sections.

### img/
The [img/](/img/) folder is the place to upload images. **Note**: Images must currently be 720x720.
- [img/members/](/img/members/): You'll probably be using this folder most, to upload profile images linked from [_members/](_members/) and [_includes/members.html](/_includes/members.html).
- [img/robots/](/img/robots/): Images linked from [_includes/robots.html](/_includes/robots.html).
- [img/projects/](/img/projects/): Images linked from [_includes/projects.html](/_includes/projects.html).
