/* after making any changes here enter "make" in your terminal to appy the changes */

var ffmapConfig = {
  // link to your main community site:
  url:       "http://bremen.freifunk.net/",

  // visible link in the navigation:
  sitename:  "bremen.freifunk.net",

  // extent which should (at least) be visible when the geomap is opened
  // [[south west], [north east]]
  extent: [[53.010340,8.480959], [53.229660,8.991268]],

  // initial gravity, friction, of the graph at pageload:
  gravity:   0.05,
  friction:  0.73,
  theta:     0.8,
  charge:    1.0,
  distance:  1.0,
  strength:  1.0,

  // path to the nodes.json
  nodes_json: "//downloads.bremen.freifunk.net/data/ffmap-d3.json",
};
