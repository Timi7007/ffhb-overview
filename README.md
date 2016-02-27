# ffhb-overview

ffhb-overview shows overviews of the Freifunk Bremen network.

A demo is available at http://cdn.timlukas.de/ffhb-overview/

It uses:
* ffmap-d3
* meshviewer
* gatemon

ffmap-d3 is directly included here and uses https://downloads.bremen.freifunk.net/data/nodes.json to get the data from our nodes.

meshviewer is embedded via an iframe from https://bremen.freifunk.net/meshviewer/

gatemon is embedded via an iframe from https://status.ffhb.tk/

The site uses JavaScript, HTML and CSS and has responsive web design to be usable on most devices.

HTTPS is supported via protocol relative URLs.

## Installation
Just *git clone* or *wget* this repository.

### index.html
Just here to show something, when you enter the directory.

It just tells you to select a view...

### meshviewer.html
Embeds https://bremen.freifunk.net/meshviewer/ in an iframe.

The code is available at https://github.com/FreifunkBremen/meshviewer

### graph.html
An interactive graph programmed in the framework d3.js, that shows all nodes, clients and connections between them. You can also show VPN-connections using an option.

*This is sometimes buggy and has performance issues.*

### geomap.html
A geographical map of all nodes with known GPS-coordinates.

The nodes are shown green in Firefox, Brave and Chrome, and red in Internet Explorer.

The mesh-connections between nodes are represented by lines in red for bad quality, yellow for medium and green for a good transmission quality.

### list.html
A table with all nodes in the network.

Sortable by clicking on the titles in the header-row.
Can be searched using CRTL+F ;)

### node.html
Shows usage graphs of a single node.

Accessible from *list.html*

### stats.html
Shows usage graphs of the whole network.

### vpn-status.html
Embeds https://status.ffhb.tk/ in an iframe.

The code is available at https://github.com/FreifunkBremen/gatemon-html
