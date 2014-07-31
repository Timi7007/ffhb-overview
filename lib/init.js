function adjust_navigation() {
  var nav=document.getElementById("sitelink")
  nav.innerHTML=ffmapConfig.sitename;
  nav.href=ffmapConfig.url;
};
function is_legacy_node(d) {
  try {
    return !d.software.firmware.base.startsWith("gluon");
  } catch(exc) {
    return true;
  }
};
