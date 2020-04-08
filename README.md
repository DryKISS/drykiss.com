# Project: DryKISS

Home of DryKISS.com

![](https://github.com/DryKISS/drykiss.com/workflows/Lint%20DryKISS/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## IndustryUI

We require a local copy of IndustryUI to develop on this site.
Clone https://github.com/DryKISS/industryui.com

To develop locally we run yarn link at the root of IndustryUI, and the second command in the project
where we wish to use it.

```
yarn link
```

Make sure the node_modules folder is not present in IndustryUI this will clash with DryKISS

```
mv node_modules node_modules_
```

To work within storybook later simply reverse

```
mv node_modules_ node_modules
```

## Setup

```bash
yarn install
yarn start
```

Inside DryKISS folder run the link below, this effectively symlinks IUI into DryKISS node modules.

```bash
yarn link industry-ui
```

## Creators

DryKISS

<https://drykiss.com>

<https://github.com/drykiss>

## Copyright and license

Code and documentation copyright 2013-2019 the
[IndustryUI Authors](https://github.com/DryKISS/industryui.com/graphs/contributors) and
[DryKISS, Ltd.](https://industryui.com) Code released under the
[MIT License](https://github.com/DryKISS/industryui.com/blob/master/LICENSE). Docs released under
[Creative Commons](https://creativecommons.org/licenses/by/3.0/).

## Site Checks

### Mail

https://stopemailfraud.proofpoint.com/spf/?lookup=drykiss.com

https://mxtoolbox.com/Public/FreeInvestigator.aspx

### Domain

https://toolbox.googleapps.com/apps/checkmx/check?domain=drykiss.com&dkim_selector=

https://toolbox.googleapps.com/apps/main/
