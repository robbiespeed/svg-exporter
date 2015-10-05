# svg-exporter

A super simple cli that exports all svgs in a folder as pngs at a set dpi value.

Requires inkscape be installed and accessible via the `inkscape` command.

Usage:
```
//svg-exporter [directory [dpi]]

svg-exporter svgs/ 180
SVG files to export:
 [ 'graphicA.svg',
  'graphicB.svg' ]

Proceed? [y/n]
y
```

If no directory is given it will default to the current working directory. The optionally set dpi defaults to 90.

## TODO
- Better argument handling ex: `svg-export -d 120` to export current directory svgs at 120 dpi
- Allow for single file
- Additional arguments:
  - Prefix exported file names `-p|--prefix text`
  - Suffix exported file names `-s|--suffix text`
  - Specify export directory `-e|--export-path`
  - Recursive directory export `-r|--recursive`
  - PDF export `--pdf`
- Option to export via JSON definition file
- Better control over which svgs in a folder to export, via picking from numbered list.
```
SVG files to export:
1- graphicA.svg
2- graphicB.svg
============================================================
Please provide a list of the svgs to export (default = all)
Format: 1[-2][, 3]
1, 2
```
