define({
  "name": "brew-api",
  "version": "1.0.0",
  "description": "social beer api",
  "title": "brewAPI - Documentation",
  "url": "http://brew.api/",
  "template": {
    "withGenerator": false
  },
  "header": {
    "title": "Introduction",
    "content": "<hr>\n<h1>Introduction</h1>\n<h2>Field Selection</h2>\n<p>Every API endpoints (except count methods) have field selection enabled,\nto use field selection, set the <strong>fields</strong> parameter in your query.</p>\n<p>usage : list selected fields coma separated in the fields parameter<br>\ni.e. For the <strong>beers</strong> endpoint, you can choose to get only <em>id</em> and <em>name</em> like this\n<code>/beers/12?fields=id,name</code>.</p>\n<p>By default you get all available fields (equivalent of <code>/beers/12?fields=*</code>),\ntry to use fields selections when you can for better server performances :)</p>\n<h2>Pagination</h2>\n<p>Endpoints with an array root element are paginated,\nto use pagination, set <strong>limit</strong> and <strong>offset</strong> query parameters in your request.</p>\n<p>usage : limit and offset takes only positive integers<br>\ni.e. to get 5 beers starting at beer id 32 you simply do<code>/beers?limit=5&amp;offset=32</code>.<br>\nEvery endpoint has default and maximum limits that are documented below.</p>\n<h2>Ordering</h2>\n<p>Endpoints with an array root element can be ordered.</p>\n<p>To enable ordering, use the <strong>order</strong> query parameter, with this form <code>field:type</code>.</p>\n<p>i.e. To get a list of beers in decreasing order of IBU you would simply write this : <code>/beers?order=ibu:desc</code></p>\n<h2>Recursivity</h2>\n<p>Linked models can be fetched through a single endpoint to avoid multiple calls to the API.\nBy default linked models are included in the response but you can tell the API to exclude them if you want.</p>\n<p>Use the <strong>recursivity</strong> parameter to get linked models or not, it takes a boolean.</p>\n<p>i.e. <code>/breweries?recursivity=false</code> if you don't want associated beers and brewery geoposition.</p>\n<p>For the moment you cannot select which associated model you want to get.</p>\n<h2>Misc</h2>\n<ul>\n<li>Every <em>POST</em> and <em>PUT</em> parameters are passed into body request.</li>\n</ul>\n"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-07-11T12:57:10.134Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
